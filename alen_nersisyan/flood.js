var up = 0

module.exports =  class Flood {
  constructor() {
    this.x = 0
    this.y = 0
    this.size = matrix.length
    this.mul = 0

  }
  flood(g,ge,p) {
if(this.mul = 4){

    for (var i5 = up; i5 >= 0; i5--) {
     
      for (var i = 0; i < this.size; i++) {
       matrix[i5][i] = 4
        for (let i1 in g) {
          if (i5 == g[i1].y && i == g[i1].x) {
            g.splice(i1, 1);
            
          break; 
          }
        }
        for (let i2 in ge) {
          if (i5 == ge[i2].y && i == ge[i2].x) {
            
            ge.splice(i2, 1);
            break;
          }

        }
        for (let i3 in p) {
          if (i5 == p[i3].y && i == p[i3].x) {
            
            p.splice(i3, 1);
            break;
          }
        }
      }
      up++
this.mul = 0
    }} else{
      this.mul++
    }

    

  }
}
