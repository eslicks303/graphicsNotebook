import { hex2rgb, computeModelExtent, loadModelFromURL } from './utils.js';

modelObject = await loadModelFromURL('/resources/models/link.obj');

//const modelDim = computeModelExtent(modelObject);
//console.log(modelDim);
const hex = '#FFFFFF';
console.log(hex2rgb(hex));