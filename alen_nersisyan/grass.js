let LivingCreature = require("./livingCreature")
module.exports=  class Grass extends LivingCreature{
    
    
    mul() {
    
    this.multiply++; //1
    var newCell = random(this.chooseCell(0)); //newCell-1 datark harevan
    if (this.multiply >= 3 && newCell) { //[3,4]
    var newGrass = new Grass(newCell[0], newCell[1]);
    grassArr.push(newGrass);
    matrix[newCell[1]][newCell[0]] = 1;
    this.multiply = 0;
    }
    }

    
    }