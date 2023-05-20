var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var Grass = require("./grass")
var GrassEater = require("./grassEater")
var Predator = require("./predator")
var Flood = require("./flood")
var DirtyRiver = require("./dirtyRiver")
var Storm = require("./storm.js")
var Bomb = require("./bomb.js")

app.use(express.static("."));

app.get('/', function (req, res) {
  res.redirect('index.html');
});

grassArr = [];
grassEaterArr = [];
predatorArr = []
stormArr = []
bombArr = []




server.listen(3000);

function random(min, max) {
  if (Array.isArray(min)) {
    var z = random(0, min.length)
    return min[z]
  } else if (max === undefined) {
    max = min
    min = 0

    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return z;
  } else {
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return z;
  }

}
matrix = []
function matrixGenerator(size, grass, grasseater, predator, storm , bomb) {
  for (let i = 0; i < size; i++) {
    matrix.push([])
    for (let j = 0; j < size; j++) {
      matrix[i].push(0)
    }

  }
  for (let k = 0; k < grass; k++) {
    let x = Math.floor(random(size - 1))
    let y = Math.floor(random(size - 1))
    matrix[x][y] = 1
  }
  for (let k1 = 0; k1 < grasseater; k1++) {
    let x = Math.floor(random(size - 1))
    let y = Math.floor(random(size - 1))
    matrix[x][y] = 2
  }
  for (let k2 = 0; k2 < predator; k2++) {
    let x = Math.floor(random(size - 1))
    let y = Math.floor(random(size - 1))
    matrix[x][y] = 3
  } for (let k3 = 0; k3 < storm; k3++) {
    let x = Math.floor(random(size - 1))
    let y = Math.floor(random(size - 1))
    matrix[x][y] = 6}
  // } for (let k4 = 0; k4 < bomb; k4++) {
  //   let x = Math.floor(random(size - 1))
  //   let y = Math.floor(random(size - 1))
  //   matrix[y][x] = 7
  // }

  io.emit("send matrix", matrix)
}

matrixGenerator(40, 100, 1, 5, 5 , 5)



function createObj() {
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
      if (matrix[y][x] == 6) {
        let storm = new Storm(y, x );
        stormArr.push(storm);
        
      } 
      if (matrix[x][y] == 7) {
        let bomb = new Bomb(x, y);
        bombArr.push(bomb);
      }


    }
  }
  io.emit("send matrix", matrix)
}

createObj()
var flood = new Flood
function gameMove() {
  for (i in grassArr) {
    grassArr[i].mul()
  }

  for (i in grassEaterArr) {
    grassEaterArr[i].mul()
    grassEaterArr[i].eat(grassArr)
  }

  for (i in predatorArr) {
    predatorArr[i].eat(grassArr, grassEaterArr)
  }

for(i in stormArr){
  stormArr[i].move()
  
}
var river = new DirtyRiver
  river.flow(matrix.length, grassArr, grassEaterArr, predatorArr)
  flood.flood(grassArr, grassEaterArr, predatorArr , stormArr , bombArr)
 

  


  io.emit("send matrix", matrix)
}


setInterval(gameMove, 500)
