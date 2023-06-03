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
            [this.x - 2, this.y],
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
        var all = this.allDirections
        var dir = this.directions

        for (let i in all) {
            if (all[i][0] < 0 || all[i][1] < 0 || all[i][0] > matrix.length || all[i][1] > matrix.length) {
                all.splice(i, 1)
            }
        }
        for (let i1 in dir) {
            if (dir[i1][0] < 0 || dir[i1][1] < 0 || dir[i1][0] > matrix.length || dir[i1][1] > matrix.length) {
                dir.splice(i1, 1)
            }
        }

        let Master = all
        Master.push([this.x, this.y])
        let arr = [1, 2, 3, 6]
        let checkArr = []
        for (let i2 in dir) {
            for (let i3 in arr) {

                if (matrix[dir[i2][1]][dir[i2][0]] == arr[i3]) {
                    checkArr.push("go")
                }
            }
        }

        if (checkArr.length > 0) {
            this.action(Master)
            bombArr.splice(bombArr.indexOf(this), 1)
        }
    }


    action(all) {

        multiBoom()
        setTimeout(function () {

            setTimeout(restore, 1)
        }, 4000)

        //*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//

        function boom() {

            // let grasses = chooseCell(1)
            // let grassEaters = chooseCell(2)
            // let predators = chooseCell(3)
            // let storms = chooseCell(6)
            all.forEach(function (val) {
                if (grassArr.includes(val)) {
                    grassArr.splice(grassArr.indexOf(val), 1)
                } else if (grassEaterArr.includes(val)) {
                    grassEaterArr.splice(grassEaterArr.indexOf(val), 1)
                } else if (predatorArr.includes(val)) {
                    predatorArr.splice(predatorArr.indexOf(val), 1)
                } else if (stormArr.includes(val)) {
                    stormArr.splice(stormArr.indexOf(val), 1)
                }
                matrix[val[1]][val[0]] = 10
            })


        }

        //////////

        function restore() {
            all.forEach(function (val) {
                matrix[val[1]][val[0]] = 0
            })
        }

        //////////

        function multiBoom() {
            for (i = 0; i < 5; i++) {
                setTimeout(boom, 799)
            }
        }
    }
}