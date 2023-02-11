
var side = 15;
let grassArr = [];
let grassEaterArr = [];
let predatorArr = []
let stormArr = []
var allcharacters = grassArr.concat(grassEaterArr)
var matrix = []
function setup() {
  
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

frameRate(5)
}
matrixGenerator(40,100,1,5)



  createCanvas(matrix[0].length * side, matrix.length * side);
  background("#acacac");
 
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
      if (matrix[y][x] == 5) {
        let storm = new Storm(x, y);
       stormArr.push(storm);
      }
    }
  }
  
}

function draw() {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] == 0) {
        fill("gray");
        rect(y * side, x * side, side, side);
      } else if (matrix[x][y] == 2) {
        fill("yellow");
        rect(y * side, x * side, side, side);
      } else if (matrix[x][y] == 1) {
        fill("green");
        rect(y * side, x * side, side, side);
      }else if (matrix[x][y] == 3) {
        fill("red");
        rect(y * side, x * side, side, side);
      } else if (matrix[x][y] == 4) {
        fill("blue");
        rect(y * side, x * side, side, side)}else if (matrix[x][y] == 5) {
          fill("black");
          rect(y * side, x * side, side, side)}
    }
  }
  

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
  
var flood = new Flood
    flood.flood()
      var river = new DirtyRiver
    river.flow(matrix.length)
    
}


