# Hoover

### Description

A web application that drives an imaginary robotic hoover (much like a Roomba) around an equally imaginary room based on:

- room dimensions as X and Y coordinates, identifying the top right corner of the room rectangle. This room is divided up in a grid based on these dimensions; a room that has dimensions X: 5 and Y: 5 has 5 columns and 5 rows, so 25 possible hoover positions. The bottom left corner is the point of origin for our coordinate system, so as the room contains all coordinates its bottom left corner is defined by X: 0 and Y: 0.
- an initial hoover position (X and Y coordinates like patches of dirt)
locations of patches of dirt, also defined by X and Y coordinates identifying the bottom left corner of those grid positions.
- The room will be rectangular, has no obstacles (except the room walls), no doors and all locations in the room will be clean (hoovering has no effect) except for the locations of the patches of dirt presented in the program input.

Placing the hoover on a patch of dirt ("hoovering") removes the patch of dirt so that patch is then clean for the remainder of the program run. The hoover is always on - there is no need to enable it.

Driving into a wall has no effect (the robot skids in place).
### Approach
As I was not quite familiar with react, I decided to build the logic of the game in javaScript ([GitHub](https://github.com/Gia1987/Hoover-react/tree/master/Tech.js)) and tested with Jasmine framework, to have a big picture of the challenge.
Once finished the logic I started to adapt the logic to react. I also have to re-cover some react materials and learn them deeper.
I just managed to complete a few task like create a Grid and the possibility to change the size, I also wrote methods that allows to change the position of the Hoover. Hoover can move into the grid.

### How to run the App
- clone this repo:  https://github.com/Gia1987/Hoover-react
- npm install
- npm start

### Other way to run the app
The app also lives on Heroku at this link: https://hoover-app.herokuapp.com/

### TODO
- make user able to locate dirt patches.
- A text based representation of the number of dirt patches which have been hoovered
