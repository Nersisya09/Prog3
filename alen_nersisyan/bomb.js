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
        dir.forEach(function (val) {
            arr.forEach(function (arrVal) {
                if (val) {
                    
                    if (matrix[val[1]][val[0]] == arrVal) {
                        checkArr.push("go")
                    }
                }
            })
        })

        if (checkArr.length > 0) {
            this.action(Master)
            Master.forEach((val) => matrix[val[1]][val[0]] = 10)
            bombArr.splice(bombArr.indexOf(this), 1)
        }
    }


    action(all) {

        multiBoom()
        setTimeout(function () {
            restore()

        }, 2000)
        //*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//

        function boom() {

            all.forEach(function (val) {
                for (var i in grassArr) {
                    if (val[0] == grassArr[i].x && val[1] == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
                for (var i in grassEaterArr) {
                    if (val[0] == grassEaterArr[i].x && val[1] == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
                for (var i in predatorArr) {
                    if (val[0] == predatorArr[i].x && val[1] == predatorArr[i].y) {
                        predatorArr.splice(i, 1);
                        break;
                    }
                }
                for (var i in stormArr) {
                    if (val[0] == stormArr[i].x && val[1] == stormArr[i].y) {
                        stormArr.splice(i, 1);
                        break;
                    }
                }

            })


        }

        //////////

        function restore() {
            all.forEach(function (val) {
                matrix[val[1]][val[0]] = 6
           
                boom()
                matrix[val[1]][val[0]] = 0
            })
        }

        //////////

        function multiBoom() {
            for (i = 0; i < 5; i++) {
                all.forEach((val) => matrix[val[1]][val[0]] = 10)
                setTimeout(boom, 400)
            }
        }
    }
}