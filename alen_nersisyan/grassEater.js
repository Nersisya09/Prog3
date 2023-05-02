let LivingCreature = require("./livingCreature")
module.exports =  class GrassEater extends LivingCreature {
  constructor(x, y, index) {
    super(x, y, index);
    this.energy = 8;
  }
  getNewCoordinates() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1]
    ];
  }
  chooseCell(character) {
    this.getNewCoordinates();
    return super.chooseCell(character);
  }


  move() {
    if (this.energy > 0) {

      this.energy--;
      let emptyCells = this.chooseCell(0) //[[1,2],[2,5]]
      let cellI = this.random(0,emptyCells.length) 

      let oneEmptyCell = emptyCells[cellI]
      if (oneEmptyCell) {
        matrix[this.y][this.x] = 0
        let neighX = oneEmptyCell[0]
        let neighY = oneEmptyCell[1]
        matrix[neighY][neighX] = 2
        this.y = neighY
        this.x = neighX
      }
    }
    else {
      this.die();
    }
  }

  eat(g) {
    let grasses = this.chooseCell(1)
    let oneGrassI = this.random(0,grasses.length)
    var oneGrass = grasses[oneGrassI]
    if (oneGrass) {
      this.energy++;
      let oneGrassX = oneGrass[0];
      let oneGrassY = oneGrass[1];
      matrix[oneGrassY][oneGrassX] = 2;
      matrix[this.y][this.x] = 0;
      this.y = oneGrassY;
      this.x = oneGrassX;
      for (var i in g) {
        if (oneGrassX == g[i].x && oneGrassY == g[i].y) {
          g.splice(i, 1);//[[1,2],[2,3]]

          break;
        }
      }
    } else {
      this.move()
    }
  }




  mul() {
    if (this.energy >= 12) {
      let newCells = this.chooseCell(0)
      var newCellI = this.random(0,newCells)
      var newCell = newCells[newCellI]
      if (newCell) {
        var newGrassEater = new GrassEater(newCell[0], newCell[1])
        grassEaterArr.push(newGrassEater)
        matrix[newCell[1]][newCell[0]] = 2
        this.energy = 5
      }
    }


  }

  die() {

    matrix[this.y][this.x] = 0
    for (var i in grassEaterArr) {
      if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
        grassEaterArr.splice(i, 1)
        break
      }
    }


  }
}
