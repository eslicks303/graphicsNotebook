# Graphics Notebook
## A repository for testing javascript, webgl2, and twgl ideas
*Ideas are not final and this list will be tweaked as the project moves forward*
<br />

***
## Main Task List (in order of importance)
- [ ] Player movement
- [ ] Collision with walls
- [ ] Enemy behavior
  - [ ] Movement
  - [ ] Vision<br />
    >*A circular area with the enemy at its center.*<br />
  *When entered by the player it will cause the enemy to enter the chasing state*

  - [ ] States
    - [ ] Gaurding<br />
        >*Enemies in this state will wander the maze without knowing where the player is*
    - [ ] Chasing<br />
        >*Enemies in this state know where the player is and will try to catch them.*<br />
        *If the player is able to stay out of sight for long enough, then the enemy will*<br />
        *return to the gaurding state. If the player alerts the enemies too many times,*<br /> 
        *then the enemies on that floor will permanently remain in the chasing state*
    - [ ] Sleeping
        >*This state is reserved for the enemy gaurding the entrance to the dungeon.*<br />
        *If an enemy in the gaurding state enters the vision of a sleeping enemy,*<br />
        *That enemy will wake up for a short amount of time*
  - [ ] Collision with player
- [ ] Item behavior
  - [ ] Picking up items
  - [ ] Variation of items
    - [ ] Different score values
    - [ ] Different materials
    - [ ] Different size value
- [ ] Basic inventory function (size limit for items held)
- [ ] Simple score calculation
- [ ] Simple distraction system
    >*The player will have a limited number of distraction interactions they can*<br /> *perform per floor. Trying to cause a distraction too many times will permanently*<br />
    *put all enemies on that floor in the chasing state.*
- [ ] Local lighting<br />
  >*Enemys may hold lights which will visually represent their range of vision*

***
## Stretch Goals (in order of possibility lol)
- [ ] Level variation
  - [ ] Multiple "Floors"
    >*The option to go down to harder levels for better loot*
  - [ ] Random generation
    - [ ] Random Arrangment of predetermined maze parts
    ### -OR-
    - [ ] A random layout of a predetermined, whole maze
***
- [ ] Advanced Inventory
  - [ ] An item's size takes up different "units"

    >*Say the inventory is a 4x4 grid like so:*
    ```
    [ 00 ] [ 01 ] [ 02 ] [ 03 ]
    [ 04 ] [ 05 ] [ 06 ] [ 07 ]
    [ 08 ] [ 09 ] [ 10 ] [ 11 ]
    [ 12 ] [ 13 ] [ 14 ] [ 15 ]
    ```
    >*And one particular item might take up a 2x1 amount of space.*<br />
    *While another item might take up a 3x3 space*<br />
    *The player would need to statigize how they organize their inventory space:*

    ```
    [--2x1 Item--] [ 02 ] [ 03 ]
    [-------------------] [ 07 ]
    [-----3x3 Item------] [ 11 ]
    [-------------------] [ 15 ]
    ```
    >*The challenge is allowing the player to freely drag and drop items and the will*<br />
    *"click" into place. One further challenge will be allowing the items to be*<br />
    *rotated to allow certain items to fit a different profile*
***
- [ ] Higher visual polish
  - [ ] Advanced skybox to indicate time
    - [ ] Twinkling stars
    - [ ] Skybox gradients
        <br />
        >*"Twilight" gradient when entering the dungeon*<br />
        *Darker night-like gradient when leaving the dungeon*<br />

        >*Perhaps the skybox color could be somewhere inbetween these examples depending on*<br />
        *How many floors/levels they visit*

  - [ ] Small decorative details such as
    <br />
    >- *Foliage*
    >   - *Sways when stepped on*

    >- *Puddles that have a reflective material*<br />
    >   - *Ripples when stepped on*
  - [ ] Advanced models
    - [ ] Player
    - [ ] Enemey
      - [ ] Different based on the floor
    - [ ] Items
    - [ ] Floor/Level
  - [ ] Animation
    - [ ] Moving
    - [ ] Idling
***
- [ ] More advanced "game over" system<br />
  >*Player is given a number of "retries" where if they are caught by an enemy*<br />
  *they may continue at a checkpoint such as when they first entered a level.*<br />

  >*A score penalty will be applied per retry*
***
- [ ] Full multiplayer support
***




  


