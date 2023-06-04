// const GrassEater = require("./grassEater")
let LivingCreature = require("./livingCreature")
module.exports = class Storm extends LivingCreature {

  draw() {
    this.getNewCoordinates()
    let all = this.directions
    all.filter((val) => val != undefined)
    var stormC = []
    for (let i = 5; i > 0; i--) {
      let oneI = this.random(0, all.length - 1)
      let one = all[oneI]
      all.splice(all.indexOf(one), 1)
      stormC.push(one)
    }

    stormC.push([this.x, this.y])
    stormC.forEach(function (val) {
      if(val){
        matrix[val[1]][val[0]] = 6
      }
      
    })


    this.eat(stormC)
    setTimeout(() => {
      this.move(stormC)

    }, 100);
  }

  eat(all) {
    all.forEach(function (val) {

      grassArr.forEach(function (val1, index) {
        if (val1.x == val[0] && val1.y == val[1]) {
          grassArr.splice(index, 1)
        }
      })
      grassEaterArr.forEach(function (val2, index1) {
        if (val2.x == val[0] && val2.y == val[1]) {
          grassEaterArr.splice(index1, 1)
        }
      })
      predatorArr.forEach(function (val3, index2) {
        if (val3.x == val[0] && val3.y == val[1]) {
          predatorArr.splice(index2, 1)
        }
      })
    })

  }

  move(all) {

    let newCI = this.random(0, all.length - 1)
    let newC = all[newCI]
    if (newC) {
      all.forEach((val) => matrix[val[1]][val[0]] = 0)
      this.x = newC[0]
      this.y = newC[1]
    }
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