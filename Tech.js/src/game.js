function Game(){
  this.grid = []
  this.x = 0
  this.y = 0
  this.dirtyHoovered = 0

}

Game.prototype.drawGrid = function(number){
  var line = Array(number).join().split(',');
  var i = 0
  for(i = 0; i < number; i++){
    this.grid.push(line.slice())
  };
}

Game.prototype.getDirtyHoovered = function(){
  return this.dirtyHoovered
}

Game.prototype.getGrid = function(){
  return this.grid
}

Game.prototype.destroyGrid = function(){
  this.grid = []
}

Game.prototype.initialPosition = function(x, y){
  this.x = x
  this.y = y
  this.grid[y][x] = 'H'
}

Game.prototype.updatePosition = function(){
  return this.grid[this.y][this.x] = 'H'
}
Game.prototype.createDirtyBox = function(x, y) {
   if(this.grid[y][x] != 'H'){
     this.grid[y][x] = 'D'
   }
}

Game.prototype.clean = function(){
  if(this.grid[this.y][this.x] === 'D'){
    this.dirtyHoovered += 1
    this.grid[this.y][this.x] = ''
  }else{
    this.grid[this.y][this.x] = ''
  }
}

Game.prototype.up = function(){
  if(this.y < this.grid.length){
    this.grid[this.y][this.x] = ''
    this.dir(0,1)
    this.clean();
    this.updatePosition();
  }
}

Game.prototype.down = function(){
  if (this.y > 0){
    this.grid[this.y][this.x] = ''
    this.dir(0,-1)
    this.clean();
    this.updatePosition();
  }
}

Game.prototype.left = function(){
  if(this.x > 0){
    this.grid[this.y][this.x] = ''
    this.dir(-1,0)
    this.clean();
    this.updatePosition();
  }
}

Game.prototype.right = function(){
  if(this.x < this.grid.length){
    this.grid[this.y][this.x] = ''
    this.dir(1,0)
    this.clean();
    this.updatePosition();
  }
}

Game.prototype.dir = function(x, y){
    this.x += x;
    this.y += y;
}

Game.prototype.getX = function(){
  return this.x
}

Game.prototype.getY = function(){
  return this.y
}

// Game.prototype.move = function(){
//   if(keyCode === UP_ARROW){
//       this.dir(0,1);
//   else if { keyCode === DOWN_ARROW
//       this.dir(0,-1);
//     }
//   else if {keyCode === RIGHT_ARROW
//       this.dir(1,0);
//     }
//   else if { keyCode === LEFT_ARROW
//       this.dir(-1, 0);
//     }
// }

// ``
// $(document).ready(function() {
//   $('td').click(function() {
//     let x = $(this).attr('class');
//     let y = $(this).parent().attr('id');
//     $('#coordinates').text(`Position: ${x}, ${y}`);
//   })
// })
//
// function updateCoordinates(tile)

// Game.prototype.drawGrid = function(){
//   grid = {
//     cell : 25;
//     width: 15;
//     height: 15
//   };
//   var canvas = document.getElementById('canvas');
//   canvas.width = grid.cell + grid.width;
//   canvas.height = grid.cell + grid.height;
//   var ctx = canvas.getContext('2d');
//   for ( var i = 0; i < grid.height; i++ ){
//     for (var j = 0; j < grid.height; j++){
//       ctx.moveTo(i* grid.cell, j* grid.cell);
//       ctx.beginPath();
//       ctx.lineTo()
//     }
//   }
// }
// window.onload = function () {
//   Game();
// }
