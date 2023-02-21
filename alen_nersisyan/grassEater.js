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
      let oneEmptyCell = random(emptyCells) //[1,2]
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

  eat() {
    let grasses = this.chooseCell(1)
    let oneGrass = random(grasses)
    if (oneGrass) {
      this.energy++;
      let oneGrassX = oneGrass[0];
      let oneGrassY = oneGrass[1];
      matrix[oneGrassY][oneGrassX] = 2;
      matrix[this.y][this.x] = 0;
      this.y = oneGrassY;
      this.x = oneGrassX;
      for (var i in grassArr) {
        if (oneGrassX == grassArr[i].x && oneGrassY == grassArr[i].y) {
          grassArr.splice(i, 1);//[[1,2],[2,3]]

          break;
        }
      }
    } else {
      this.move()
    }
  }




  mul() {
    if (this.energy >= 12) {
      var newCell = random(this.chooseCell(0))
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
