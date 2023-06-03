const GrassEater = require("./grassEater")

var up = 0

module.exports = class Flood {
  constructor() {
    this.x = 0
    this.y = 0
    this.size = matrix.length
    this.mul = 0

  }
  flood() {
    if (this.mul = 4 && up < matrix.length) {

      for (var i5 = up; i5 >= 0; i5--) {

        for (var i = 0; i < this.size; i++) {
          matrix[i5][i] = 4
          for (let i1 in grassArr) {
            if (i5 == grassArr[i1].y && i == grassArr[i1].x) {
              grassArr.splice(i1, 1);
            }
          }
          for (let i2 in grassEaterArr) {
            if (i5 == grassEaterArr[i2].y && i == grassEaterArr[i2].x) {
              grassEaterArr.splice(i2, 1);
            }

          }
          for (let i3 in predatorArr) {
            if (i5 == predatorArr[i3].y && i == predatorArr[i3].x) {
              predatorArr.splice(i3, 1);
            }
          }

          for (let i4 in stormArr) {
            if (i5 == stormArr[i4].y && i == stormArr[i4].x) {
              stormArr.splice(i4, 1);
            }
          }
          for (let i6 in bombArr) {
            if (i5 == bombArr[i6].y && i == bombArr[i6].x) {
              bombArr.splice(i6, 1);
            }
          }
        }



        this.mul = 0
      } up++
    } else {
      this.mul++
    }



  }
}
