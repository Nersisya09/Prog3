var x1 =  1

module.exports = class DirtyRiver {


flow(x){
  if(x1 <= matrix.length){
  x = x-x1
  for(let i = x; i < matrix.length; i++){
    matrix[i][i] = 5
  }

  for (let i1 in grassArr) {
    if (x == grassArr[i1].y && x == grassArr[i1].x) {
      grassArr.splice(i1, 1);
    }
  }
  for (let i2 in grassEaterArr) {
    if (x == grassEaterArr[i2].y && x == grassEaterArr[i2].x) {
      grassEaterArr.splice(i2, 1);
    }

  }
  for (let i3 in predatorArr) {
    if (x == predatorArr[i3].y && x == predatorArr[i3].x) {
      predatorArr.splice(i3, 1);
    }
  }

  for (let i4 in stormArr) {
    if (x == stormArr[i4].y && x == stormArr[i4].x) {
      stormArr.splice(i4, 1);
    }
  }
  for (let i5 in bombArr) {
    if (x == bombArr[i5].y && x == bombArr[i5].x) {
      bombArr.splice(i5, 1);
    }
  }
  x1+=1
}}}


