import * as d3 from "https://cdn.skypack.dev/d3@7";
import { OBJLoader } from '/node_modules/three/examples/jsm/loaders/OBJLoader.js';
import * as twgl from 'https://twgljs.org/dist/4.x/twgl.js';

const m4 = twgl.m4;
const v3 = twgl.v3;

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

export function hex2rgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};


export function computeModelExtent(...o) {
    const extents = o.map((d) => {
        const xExtent = d3.extent(d.sc.positions.filter((_, i) => i % 3 === 0));
        const yExtent = d3.extent(d.sc.positions.filter((_, i) => i % 3 === 1));
        const zExtent = d3.extent(d.sc.positions.filter((_, i) => i % 3 === 2));
        return {
            min: [xExtent[0], yExtent[0], zExtent[0]],
            max: [xExtent[1], yExtent[1], zExtent[1]]
        };
    });

    const transformedExtents = extents.map((extent, i) => {
        return o[i].modelMatrix
          ? {
              min: mat4.transformPoint(o[i].modelMatrix, extent.min),
            max: mat4.transformPoint(o[i].modelMatrix, extent.max)
            }   
        : extent;
    });
    const xMin = d3.min(transformedExtents, (d) => d.min[0]);
    const xMax = d3.max(transformedExtents, (d) => d.max[0]);
    const yMin = d3.min(transformedExtents, (d) => d.min[1]);
    const yMax = d3.max(transformedExtents, (d) => d.max[1]);
    const zMin = d3.min(transformedExtents, (d) => d.min[2]);
    const zMax = d3.max(transformedExtents, (d) => d.max[2]);
    const min = [xMin, yMin, zMin],
        max = [xMax, yMax, zMax];
    const center = vec3.divScalar(vec3.add(min, max), 2); // center of AABB
    const dia = vec3.length(vec3.subtract(max, min)); // Diagonal length of the AABB
    return {
        min,
        max,
        center,
        dia
    };
}

function loadObjObject (URL, mtls) {
    loadObject(URL, mtls)
}

function loadObject(url, mtls) {
  new Promise((resolve, reject) => {
    // instantiate a loader
    const loader = new OBJLoader();
    if (mtls)loader.setMaterials(mtls);
    loader.load(
      // resource URL
      url,
      // called when resource is loaded
      function (object) {
        resolve(object);
      },
      // called when loading is in progresses
      function (xhr) {
        return (xhr.loaded / xhr.total) * 100 + "% loaded";
      },
      // called when loading has errors
      function (error) {
        reject("Error in loading");
      }
    );
  })
}

export async function loadModelFromURL(URL) {
    let loadedModel = await loadObject(URL);
    return createSCs(loadedModel);
}

function createSCs(obj){
  const sceneGraph = {};
  let scs = [];
  if (obj.scene) getNode(obj.scene, mat4.create());
  else getNode(obj, mat4.create());

  function getNode(node, M) {
    const sc = {};
    sc.name = node.name;

    const translation = node.position
      ? [node.position.x, node.position.y, node.position.z]
      : [0, 0, 0];
    const quaternion = node.quaternion
      ? [
          node.quaternion.x,
          node.quaternion.y,
          node.quaternion.z,
          node.quaternion.w
        ]
      : [0, 0, 0, 1];
    //const rotation = node.rotation?[node.rotation.x,node.rotation.y,node.rotation.z]:[0,0,0];// XYZ order
    const scale =
      node.scale && node.scale.x
        ? [node.scale.x, node.scale.y, node.scale.z]
        : [1, 1, 1];

    sc.modelMatrix = mat4.multiply(
      M,
      mat4.fromRotationTranslationScale(quaternion, translation, scale)
    );

    if (node.geometry || node.attributes) {
      const attributes = node.geometry
        ? node.geometry.attributes
        : node.attributes;
      if (
        node.geometry &&
        node.geometry.groups &&
        node.geometry.groups.length > 0
      ) {
        const groups = node.geometry.groups;
        const localScs = d3.range(0, groups.length, 1).map((i) => {
          /*
          return{
            positions : array2Darray(attributes.position.array.slice(groups[i].start*3, (groups[i].start+groups[i].count)*3),3),
            normals : array2Darray(attributes.normal.array.slice(groups[i].start*3, (groups[i].start+groups[i].count)*3),3),
            uvs : array2Darray(attributes.uv.array.slice(groups[i].start*2, (groups[i].start+groups[i].count)*2),2)
          }
          */
          return createSC(attributes, {
            start: groups[i].start,
            count: groups[i].count
          });
        });
        //return scs
        localScs.forEach((d, i) => {
          //d.cells = d3.range(0,d.positions.length/3,1).map(i=>[i*3+0,i*3+1,i*3+2]);
          scs.push({ name: sc.name, sc: d, modelMatrix: sc.modelMatrix });
        });
      } else {
        sc.sc = createSC(attributes);
        scs.push(sc);
      }
    }
    if (node.children) node.children.forEach((d) => getNode(d, sc.modelMatrix));
  }
  return scs;
}
