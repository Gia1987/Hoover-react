describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
    game.drawGrid(3);
  });

  describe('#grid', function(){

    it('return 3X3 array', function() {
      expect(game.getGrid()).toEqual([['', '', ''],['', '', ''], ['', '', '']]);
    });
  });
  describe('#dir', function(){

    it('return a specific coordinates array', function() {
      game.initialPosition(0,0);
      game.up()
      game.right()
      game.right()
      expect(game.getX()).toEqual(2)
      expect(game.getY()).toEqual(1)
    });
  });
  describe('#up', function(){

    it('move of one box up', function() {
      game.initialPosition(0,0);
      game.up()
      expect(game.getGrid()).toEqual([['', '', ''],['H', '', ''], ['', '', '']]);
    });
    it('clean one box moving up', function() {
      game.initialPosition(0,0);
      game.createDirtyBox(0,1);
      game.up()
      game.up()
      expect(game.getGrid()).toEqual([['', '', ''],['', '', ''], ['H', '', '']]);
    });
  });
  describe('#down', function(){

    it('move of one box down', function() {
      game.initialPosition(0,2);
      game.down()
      expect(game.getGrid()).toEqual([['', '', ''],['H', '', ''], ['', '', '']]);
    });

    it('Do not move one box down if y = 0', function() {
      game.initialPosition(0,0);
      game.down()
      expect(game.getGrid()).toEqual([['H', '', ''],['', '', ''], ['', '', '']]);
    });
    it('clean one box moving down', function() {
      game.initialPosition(0,2);
      game.createDirtyBox(0,1);
      game.down()
      game.down()
      expect(game.getGrid()).toEqual([['H', '', ''],['', '', ''], ['', '', '']]);
    });
  });
  describe('#left', function(){

    it('move of one box left', function() {
      game.initialPosition(2,2);
      game.left()
      expect(game.getGrid()).toEqual([['', '', ''],['', '', ''], ['', 'H', '']]);
    });
    it('Do not move one box left if x = 0', function() {
      game.initialPosition(0,0);
      game.left()
      expect(game.getGrid()).toEqual([['H', '', ''],['', '', ''], ['', '', '']]);
    });
    it('clean one box moving left', function() {
      game.initialPosition(2,0);
      game.createDirtyBox(1,0);
      game.left()
      game.left()
      expect(game.getGrid()).toEqual([['H', '', ''],['', '', ''], ['', '', '']]);
    });
  });
  describe('#right', function(){

    it('move of one box right', function() {
      game.initialPosition(0,0);
      game.right()
      expect(game.getGrid()).toEqual([['', 'H', ''],['', '', ''], ['', '', '']]);
    });
    it('clean one box moving right', function() {
      game.initialPosition(0,0);
      game.createDirtyBox(1,0);
      game.right()
      game.right()
      expect(game.getGrid()).toEqual([['', '', 'H'],['', '', ''], ['', '', '']]);
    });
  });
  describe('#destroyGrid', function(){

    it('reset the grid', function() {
      game.destroyGrid()
      expect(game.getGrid()).toEqual([])
    });
  });
  describe('#getDirtyBox', function(){

    it('create dirty box', function() {
      game.initialPosition(0,0);
      game.createDirtyBox(0,1);
      game.createDirtyBox(1,0);
      game.createDirtyBox(1,2);
      game.createDirtyBox(2,1);
      expect(game.getGrid()).toEqual([['H', 'D', ''],['D', '', 'D'], ['', 'D', '']])
    });
  });
  describe('#clean', function(){

    it('dirtyHoovered incrase by 1', function() {
      game.initialPosition(0,0);
      game.createDirtyBox(1,0);
      game.createDirtyBox(2,0);
      game.right()
      game.right()
      expect(game.dirtyHoovered).toEqual(2);
      expect(game.getGrid()).toEqual([['', '', 'H'],['', '', ''], ['', '', '']]);
    });
  });
});
