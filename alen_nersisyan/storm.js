let LivingCreature = require("./livingCreature")
module.exports = class Storm extends LivingCreature {

  draw(i) {
    this.index = parseInt(i)
    this.getNewCoordinates()
    var arr = this.directions


    let r1 = this.random(0, arr.length-1)
    let r2 = this.random(0, arr.length-1)
    let r3 = this.random(0, arr.length-1)


    // let grasses = this.chooseCell(1)
    // let grassEaters = this.chooseCell(2)
    // let predators = this.chooseCell(3)

  arr.splice(r1, 1)
   arr.splice(r2, 1)
   arr.splice(r3, 1)



    // let arrR = []
    // arrR.push(r11, r22, r33)


    // for (let i in arrR) {
    //   for (let i1 in grasses) {
    //     if (arrR[i][0] == grasses[i1][0] && arrR[i][1] == grasses[i1][1]) {
    //       for (let i2 in grassArr) {
    //         if (arrR[i][0] == grassArr[i2].x && arrR[i][1] == grassArr[i2].y) {
    //           grassArr.splice(i2, 1)

    //         }
    //       }
    //     }
    //   }
    //   for (let i3 in grassEaters) {
    //     if (arrR[i][0] == grassEaters[i3][0] && arrR[i][1] == grassEaters[i3][1]) {
    //       for (let i4 in grassEaterArr) {
    //         if (arrR[i][0] == grassEaterArr[i4].x && arrR[i][1] == grassEaterArr[i4].y) {
    //           grassEaterArr.splice(i4, 1)
    //         }
    //       }
    //     }
    //   }

    //   for (let i5 in predators) {
    //     if (arrR[i][0] == predators[i5][0] && arrR[i][1] == predators[i5][1]) {
    //       for (let i6 in predatorArr) {
    //         if (arrR[i][0] == predatorArr[i6].x && arrR[i][1] == predatorArr[i6].y) {
    //           predatorArr.splice(i6, 1)
    //         }
    //       }
    //     }
    //   }
    // }
    // for (let i in arr) {
      
    // }
    // let count = 0
    // for (i in arr) {
    //   count++
    //   console.log(count);
      
    //   m
    // }
    for (let i = 0;i <arr.length-1;i++ ) { 
      // console.log(arr[i][0],arr[i][1]);
      if (arr[i][0] <= 0 || arr[i][1] <= 0 || arr[i][0] >= 40 || arr[i][1] >= 40) {
         arr.splice(i, 1)
      }
    }
    for (let i in arr) { 
      matrix[arr[i][0]][arr[i][1]] = 6
      for (let i2 in grassArr) {

        if (arr[i][0] == grassArr[i2].x && arr[i][1] == grassArr[i2].y) {
          grassArr.splice(i2, 1)
        }
      }
      for (let i4 in grassEaterArr) {
        if (arr[i][0] == grassEaterArr[i4].x && arr[i][1] == grassEaterArr[i4].y) {
          grassEaterArr.splice(i4, 1)
        }
      }
      for (let i6 in predatorArr) {
        if (arr[i][0] == predatorArr[i6].x && arr[i][1] == predatorArr[i6].y) {
          predatorArr.splice(i6, 1)
        }
      }
    }
    // this.storm(arr)
  }

  storm(arr) {
    this.getNewCoordinates()

    let oneCellI = this.random(0, arr.length);
    let oneCell = arr[oneCellI]
    if (oneCell) {
      for (let i in arr) {
        matrix[arr[i][0]][arr[i][1]] = 0
      }
      matrix[this.x][this.y] = 0;
      let neighX = oneCell[0];
      let neighY = oneCell[1];
      matrix[neighX][neighY] = 6;
      this.x = neighX;
      this.y = neighY;
    }
    // var replace = new Storm(this.x, this.y, this.index)
    // // console.log(replace);
    // // console.log(matrix);
    // stormArr.fill(replace, this.index, this.index + 1)

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
      [this.x + 1, this.y + 1],
    ];
  }
}