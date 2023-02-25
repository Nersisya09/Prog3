let LivingCreature = require("./livingCreature")
module.exports=  class Storm extends LivingCreature{
    storm(){
      let x =random(0,matrix.length)
      let y =random(0,matrix.length)
      this.x = x
      this.y = y
      
      let n1 =random(this.directions)
      let n2 =random(this.directions) 
      let n3 =random(this.directions) 
      let n4 =random(this.directions)
      let n5 =random(this.directions)
      matrix[x][y] = 6
      matrix[n1[0][n1[1]]] = 6
      matrix[n2[0][n2[1]]] = 6
      matrix[n3[0][n3[1]]] = 6
      matrix[n4[0][n4[1]]] = 6
      matrix[n5[0][n5[1]]] = 6
      let all = n1.concat(n2.concat(n3.concat(n4.concat(n5))))
    for (var i5 = matrix.length; i5 >= 0; i5--) {
  
        for (var i = 0; i < this.matrix.length; i++) {
         
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
    }
  let new1 = random(all)
   this.x= new1[0]
  this.y = new1[1]}}