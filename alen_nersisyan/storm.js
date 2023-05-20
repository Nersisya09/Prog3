let LivingCreature = require("./livingCreature")
module.exports = class Storm extends LivingCreature {

  draw() {
    this.getNewCoordinates()
    let all = this.directions
   
    var random4 = []

    for (let i = 4; i > 0; i--) {
      let oneI = this.random(0, all.length - 1)
      let one = all[oneI]
      all.splice(all.indexOf(one), 1)
      random4.push(one)
    }
    let stormC = random4
    stormC.push([this.x, this.y])
    stormC.forEach(function (val) {
      console.log(val)
      console.log(matrix[val[0]][val[1]])
      matrix[val[0]][val[1]] = 6
    })
    console.log(stormC)
    this.eat(stormC)
  }

  eat(all) {

  }

  move(){
    
  }

  die() {

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
}