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
        fill("#2E2D31");
        rect(y * side, x * side, side, side)
      } else if (matrix[x][y] == 7) {
        fill("black");
        rect(y * side, x * side, side, side)
      } else if (matrix[x][y] == 10) {
        fill("#6D0000");
        rect(y * side, x * side, side, side)
      }
    }
  }

}

socket.on("send matrix" , update)
socket.emit("statistics",function(){
  let t1 = document.getElementById("1")
  let t2 = document.getElementById("2")
  let t3 = document.getElementById("3")
  let t4 = document.getElementById("4")
  let t5 = document.getElementById("5")
   console.log(statistics)
  t1.innerText = statistics[0]
  t2.innerText = statistics[1]
  t3.innerText = statistics[2]
  t4.innerText = statistics[3]
  t5.innerText = statistics[4]
})

