let LivingCreature = require("./livingCreature")
module.exports=  class Grass extends LivingCreature{
    
    
    mul() {
    
    this.multiply++
    let arr = this.chooseCell(0)
    var newCellI = this.random(0,arr.length);
    var newCell = arr[newCellI]
    if (this.multiply >= 3 && newCell && matrix[newCell[1]][newCell[0]] != 10 ) { 
    var newGrass = new Grass(newCell[0], newCell[1]);
    grassArr.push(newGrass);
    matrix[newCell[1]][newCell[0]] = 1;
    this.multiply = 0;}
    }


    
    }