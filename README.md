# Graphics Notebook
## A repository for testing javascript, webgl2, and twgl ideas
>*Ideas are not final and this list will be tweaked as the project moves forward*

>*While originally all code for the game was meant to be in this repo, development was faster and easier using ObservableHQ. The code can be found here:* <br />
https://observablehq.com/d/bc154ee880f39e61

>*The code in this repo will be for the html canvas viewport; the viewport from the notebook will be embedded to fill the entire page for a nice, unobstructed appearance.*
<br />

***
<br />

# What kind of game is this?
The very baseline goal of this project is to recreate Pac-Man in simple 3D. In Pac-Man your goal is to navigate the maze-like level, collect pellets, and collect fruit all while avoiding ghosts. In my mind, this set up is perfect for a rogue-like, or a dungeon crawler.<br />

Replace Pac-Man with a cloaked figure, replace the black and blue maze with something like a hedge maze or a dungeon. The pellets can be coins and the fruit can be various treasure. I don't plan on making this game exactly as one-to-one like that, but this will at least help you understand what my most basic goal is, to recreate Pac-Man.<br />

Beyond this, I hope to add lots of polish to differentiate my game from Pac-Man. Down below are a couple of lists containing general ideas that I wish to accomplish throughout this project. Due to the time constraint, some things that aren't as important will need to be cut from development, but otherwise I think enough development will be completed where I feel that I will be able to call this game my own and not just a Pac-Man clone.<br />
<br />
# Development Timeline
The project will begin development at the beginning of November and will go through to the very beginning of December. This will be about four weeks that I have to get this game working.<br /> 

As stated before, the base goal is to get a functioning game that plays similar to Pac-Man. My hope is that this will only take about a week so that I can focus totally on polishing for the bulk of this project. I don't have any experience using javascript, webgl2, or the graphics library twgl, so it's very possible that getting the foundation of this game running could take as long as two weeks or more.<br />

Worst case scenario, if I'm only able to complete my base goal by the end of the development timeline, I may choose to continue development on my own time. Provided I feel like I would be learning something I could use for the future, or maybe just that I'm having fun developing this idea. Otherwise, if I run out of time here, I might take these ideas and the things I've learned and begin development in an actual game engine, such as Unity.<br />
<br />
Anyway, here are my general ideas moving forward:
***
## Main Task List (in order of importance)
- [x] Player movement
- [x] Collision with walls
- [ ] Enemy behavior
  - [x] Movement
  - [ ] Vision<br />
    >*A circular area with the enemy at its center.*<br />
  *When entered by the player it will cause the enemy to enter the chasing state*

  - [ ] States
    - [ ] Guarding<br />
        >*Enemies in this state will wander the maze without knowing where the player is*
    - [x] Chasing<br />
        >*Enemies in this state know where the player is and will try to catch them.*<br />
        *If the player is able to stay out of sight for long enough, then the enemy will*<br />
        *return to the guarding state. If the player alerts the enemies too many times,*<br /> 
        *then the enemies on that floor will permanently remain in the chasing state*
    - [ ] Sleeping
        >*This state is reserved for the enemy guarding the entrance to the dungeon.*<br />
        *If an enemy in the guarding state enters the vision of a sleeping enemy,*<br />
        *That enemy will wake up for a short amount of time*
  - [x] Collision with player
- [ ] Item behavior
  - [ ] Picking up items
  - [ ] Variation of items
    - [x] Different score values
    - [ ] Different materials
    - [ ] Different size value
- [ ] Basic inventory function (size limit for items held)
- [x] Simple score calculation
- [ ] Simple distraction system
    >*The player will have a limited number of distraction interactions they can*<br /> *perform per floor. Trying to cause a distraction too many times will permanently*<br />
    *put all enemies on that floor in the chasing state.*
- [ ] Local lighting<br />
  >*Enemies may hold lights which will visually represent their range of vision*

***
## Stretch Goals (in order of possibility lol)
- [ ] Level variation
  - [ ] Multiple "Floors"
    >*The option to go down to harder levels for better loot*
  - [ ] Random generation
    - [ ] Random Arrangement of predetermined maze parts
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
    *The player would need to strategize how they organize their inventory space:*

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

        >*Perhaps the skybox color could be somewhere in-between these examples depending on*<br />
        *How many floors/levels they visit*

  - [ ] Small decorative details such as
    <br />
    >- *Foliage*
    >   - *Sways when stepped on*

    >- *Puddles that have a reflective material*<br />
    >   - *Ripples when stepped on*
  - [ ] Advanced models
    - [ ] Player
    - [ ] Enemy
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




  


