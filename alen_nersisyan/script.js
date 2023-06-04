let socket = io()
var side = 10
let t1 = document.getElementById("1")
  let t2 = document.getElementById("2")
  let t3 = document.getElementById("3")
  let t4 = document.getElementById("4")
  let t5 = document.getElementById("5")
  let t6 = document.getElementById("6")
  let button = document.getElementById("button")
  let summer = document.getElementById("summer")
  let winter = document.getElementById("winter")

function setup() {
  createCanvas(400, 400 );
  background("#acacac");
  frameRate(5)
}

function update(matrix) {
  
  
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
function updateWinter(matrix) {
  
  
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] == 0) {
        fill("gray");
        rect(y * side, x * side, side, side);
      } else if (matrix[x][y] == 2) {
        fill("yellow");
        rect(y * side, x * side, side, side);
      } else if (matrix[x][y] == 1) {
        fill("#533636");
        rect(y * side, x * side, side, side);
      } else if (matrix[x][y] == 3) {
        fill("red");
        rect(y * side, x * side, side, side);
      } else if (matrix[x][y] == 4) {
        fill("#6DC3FF");
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
function state(statistics){
  
  t1.innerText = statistics[0]
  t2.innerText = statistics[1]
  t3.innerText = statistics[2]
  t4.innerText = statistics[3]
  t5.innerText = statistics[4]

}
button.addEventListener("click", function() {
  socket.emit("click")
})
winter.addEventListener("click",function(){
  socket.emit("winter")
  socket.on("send matrix" , updateWinter)
})
summer.addEventListener("click",function(){
  socket.emit("summer")
  socket.on("send matrix" , update)
})
socket.on("river",function(){
t6.innerText = 0
})
socket.on("send matrix" , update)
socket.on("state",state)

