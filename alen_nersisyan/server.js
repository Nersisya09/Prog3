var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var Grass = require("./grass")
var GrassEater = require("./grassEater")
var Predator = require("./predator")
var Flood = require("./flood")
var DirtyRiver = require("./dirtyRiver")

app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

let grassArr = [];
let grassEaterArr = [];
let predatorArr = []
let floodArr = []

server.listen(3000);
matrix = []
function matrixGenerator(size , grass , grasseater , predator) {
    for(let i = 0 ; i<size ; i++){
      matrix.push([])
      for(let j = 0 ; j<size ; j++){
        matrix[i].push(0)
      }
  
      }
      for(let k = 0 ; k < grass ; k++){
        let x = Math.floor(random(size))
        let y= Math.floor(random(size))
        matrix[x][y] = 1
      }
      for(let k1 = 0 ; k1 < grasseater; k1++){
        let x = Math.floor(random(size))
        let y= Math.floor(random(size))
        matrix[x][y] = 2
    }
    for(let k2 = 0 ; k2 < predator; k2++){
      let x = Math.floor(random(size))
      let y= Math.floor(random(size))
      matrix[x][y] = 3
  }
  

  }

  matrixGenerator(40,100,1,5)



function createObj(){
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
          if (matrix[y][x] == 1) {
            let grass = new Grass(x, y);
            grassArr.push(grass);
          }
          if (matrix[y][x] == 2) {
            var grassEater = new GrassEater(x, y);
            grassEaterArr.push(grassEater);
          }
          if (matrix[y][x] == 3) {
            let predator = new Predator(x, y);
            predatorArr.push(predator);
          }
          
          
        }
      }
    
}

createObj()
var flood = new Flood
function gameMove(){
    for (i in grassArr) {
        grassArr[i].mul()
      }
      
      for (i in grassEaterArr) {
         grassEaterArr[i].mul()
        grassEaterArr[i].eat()
       
         
      }
      
        for (i in predatorArr) {
          predatorArr[i].eat()
        }
        flood.flood()
        console.log(flood.mul)
      
        var river = new DirtyRiver
        river.flow(matrix.length) 
         io.emit("send matrix" , matrix)
} 

setInterval(gameMove,500)

function random(min,max)
{
    if(Array.isArray(min)){
       var z = random(0,min.length)
        return z
    }else if (max === undefined){
        min = 0
        max = min
          var z = Math.floor(Math.random()*(max-min+1)) + min;
    return z;
    } else {
        var z = Math.floor(Math.random()*(max-min+1)) + min;
        return z;
    }
  
}