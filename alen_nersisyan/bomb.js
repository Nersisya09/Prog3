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
        var allXY = all.push([this.x, this.y])
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

    
action(all){

multiBoom()
setTimeout(function () {

    setTimeout(restore,1)
}, 4000)

//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//

function boom() {
        
    let grasses = chooseCell(1)
    let grassEaters = chooseCell(2)
    let predators = chooseCell(3)
    let storms = chooseCell(6)
    all.forEach(function (val) {
        matrix[val[1]][val[0]] = 10
    })
    grasses.forEach((val, i) => grassArr.splice(i, 1))
    grassEaters.forEach((val, i) => grassEaterArr.splice(i, 1))
    predators.forEach((val, i) => predatorArr.splice(i, 1))
    storms.forEach((val, i) => stormArr.splice(i, 1))
    
}

//////////

function chooseCell(ch) {
    var found = [];
    for (var i in all) {
        var x = all[i][0];
        var y = all[i][1];
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == ch) {
                found.push(all[i]);
            }
        }
    }
    return found;
}

//////////

function restore(){
    all.forEach(function (val) {
        matrix[val[1]][val[0]] = 0
    })
}


//////////

function multiBoom(){
for(i = 0 ; i<5; i++){
    setTimeout(boom,599)
}
}
}}