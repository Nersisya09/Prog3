let LivingCreature = require("./livingCreature")
module.exports=  class Grass extends LivingCreature{
    
    
    mul() {
    
    this.multiply++; //1
    let arr = this.chooseCell(0)
    var newCellI = this.random(0,arr.length);
    var newCell = arr[newCellI]
    
     //newCell-1 datark harevan
    if (this.multiply >= 3 && newCell ) { //[3,4]
//         let check = []
//         for( i in stormArr){
// if(stormArr[i][0] === newCell[0] && stormArr[i][1] === newCell[1]){
//         check.push(false)} else{
//             check.push(true)
//         }}
        
//         if(check.every((val) =>  val === true)){
    var newGrass = new Grass(newCell[0], newCell[1]);
    grassArr.push(newGrass);
    matrix[newCell[1]][newCell[0]] = 1;
    this.multiply = 0;}
    }
  //  }

    
    }