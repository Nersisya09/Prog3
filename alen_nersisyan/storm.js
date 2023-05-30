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
      matrix[val[1]][val[0]] = 6
    })
    
    
    this.eat(stormC)
    setTimeout(() => {
      this.move(stormC)
      
    }, 100);
  }

  eat(all) {
    all.forEach(function (val) {

      grassArr.forEach(function (val1, index) {
        if (val1[0] == val[0] && val1[0] == val[0]) {
          grassArr.splice(1, index)
        }})
      grassEaterArr.forEach(function (val2, index1) {
        if (val2[0] == val[0] && val2[0] == val[0]) {
          grassEaterArr.splice(1, index1)
        }})
        predatorArr.forEach(function (val3, index2) {
          if (val3[0] == val[0] && val3[0] == val[0]) {
            predatorArr.splice(1, index2)
          }})  
            })
 
  }

  move(all) {
    all.forEach((val) => matrix[val[1]][val[0]] = 0)
    let newCI = this.random(0,all.length-1)
    let newC = all[newCI]
    this.x = newC[0]
    this.y = newC[1]
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