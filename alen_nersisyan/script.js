let socket = io()
var side = 10
// var allcharacters = grassArr.concat(grassEaterArr)

function setup() {
  createCanvas(400, 400 );
  background("#acacac");
  frameRate(5)
}
function update(matrix) {
  // console.log(matrix);
  
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
      } else if (matrix[x][y] == 3) {
        fill("red");
        rect(y * side, x * side, side, side);
      } else if (matrix[x][y] == 4) {
        fill("blue");
        rect(y * side, x * side, side, side)
      } else if (matrix[x][y] == 5) {
        fill("#1B0F54");
        rect(y * side, x * side, side, side)
      }else if (matrix[x][y] == 6) {
        fill("pink");
        rect(y * side, x * side, side, side)
      }
    }
  }

}

socket.on("send matrix" , update)


