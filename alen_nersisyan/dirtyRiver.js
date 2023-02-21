var x1 =  1

module.exports = class DirtyRiver {
constructor(){

}

flow(x){
  x = x-x1
matrix[x][x] = 5

  for (let i1 in grassArr) {
      if (x == grassArr[i1].x  ) {
          if(x== grassArr[i1].y){
          grassArr.splice(i1, 1);
          break;}
      }}
      for(let i2 in grassEaterArr){
      if (x == grassEaterArr[i2].x) {
        if(x== grassEaterArr[i2].y){
          grassEaterArr.splice(i2, 1);
          break;}}
          for(let i3 in predatorArr){
              if (x == predatorArr[i3].x) {
                if(x== predatorArr[i3].y){
                  predatorArr.splice(i3, 1);
                  break;}}
      }}
      x1++
}}


