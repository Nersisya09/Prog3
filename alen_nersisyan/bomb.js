let LivingCreature = require("./livingCreature")
module.exports = class Bomb extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.allDirections = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y],
            [this.x + 1, this.y - 2],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y + 2],
            [this.x + 1, this.y + 1],
            [this.x - 1, this.y - 2],
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y + 2],
            [this.x - 1, this.y + 1],
            [this.x, this.y - 2],
            [this.x, this.y + 2]
        ];
    }
    check() {
        let all = this.allDirections
        console.log(this.allDirections)
        var dir = this.directions
        dir.forEach(function (val) {
            if (val != 0 || val != 4 || val != 5) {
                console.log(typeof(this.boom))
                this.boom(all)
            }
        });
    }

    boom(all) {
        let grasses = this.chooseCell(1)
        let grassEaters = this.chooseCell(2)
        let predators = this.chooseCell(3)
        let storms = this.chooseCell(6)
        all.forEach(function (val) {
            matrix[val[0]][val[1]] = 10
        })
        grasses.forEach((val) => grassArr.splice(grassArr.indexOf(val), 1))
        grassEaters.forEach((val) => grassEaterArr.splice(grassEaterArr.indexOf(val), 1))
        predators.forEach((val) => predatorArr.splice(predatorArr.indexOf(val), 1))
        storms.forEach((val) => stormArr.splice(stormArr.indexOf(val), 1))
        setTimeout(this.restore(all), 1000)
    }

    restore(all) {
        all.forEach(function (val) {
            matrix[val[0]][val[1]] = 0
        })
        bombArr.splice(bombArr.indexOf(this), 1)
    }
}