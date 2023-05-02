module.exports =  class Predator {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
        ];
    }
    chooseCell(character) {
        //0,1
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {

        this.getNewCoordinates();

        let emptyCells = this.chooseCell(0);
        let oneEmptyCell = this.random(emptyCells);
        if (oneEmptyCell) {

            matrix[this.y][this.x] = 0;
            let neighX = oneEmptyCell[0];
            let neighY = oneEmptyCell[1];
            matrix[neighY][neighX] = 3;
            this.x = neighX;
            this.y = neighY;
        }
    }
    eat(g,ge) {
        this.getNewCoordinates()
        let grasses = this.chooseCell(1)
        let grassEaters = this.chooseCell(2)
        let all = grasses.concat(grassEaters)
        let onen = this.random(all.length)
        let one = all[onen]
        if (one) {
            let oneX = one[0];
            let oneY = one[1];
            matrix[oneY][oneX] = 3;
            matrix[this.y][this.x] = 0;
            this.y = oneY;
            this.x = oneX;
            for (let i in g) {
                if (this.x == g[i].x  ) {
                    if(this.y == g[i].y){
                    g.splice(i, 1);
                    break;}
                }}
                for(let i in ge){
                if (this.x == ge[i].x) {
                  if(this.y == ge[i].y){
                    ge.splice(i, 1);
                    break;}
                }
            }
        } else {
            this.move()
        }
    }
    random(min,max){
        if(Array.isArray(min)){
           var z = this.random(0,min.length)
            return min[z]
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

}

