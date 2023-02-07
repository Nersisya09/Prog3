class Predator {
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
        let oneEmptyCell = random(emptyCells);
        if (oneEmptyCell) {

            matrix[this.y][this.x] = 0;
            let neighX = oneEmptyCell[0];
            let neighY = oneEmptyCell[1];
            matrix[neighY][neighX] = 3;
            this.x = neighX;
            this.y = neighY;
        }
    }
    eat() {
        this.getNewCoordinates()
        let grasses = this.chooseCell(1)
        let grassEaters = this.chooseCell(2)
        let all = grasses.concat(grassEaters)
        let one = random(all)
        if (one) {
            let oneX = one[0];
            let oneY = one[1];
            matrix[oneY][oneX] = 3;
            matrix[this.y][this.x] = 0;
            this.y = oneY;
            this.x = oneX;
            for (let i in grassArr) {
                if (this.x == grassArr[i].x  ) {
                    if(this.y == grassArr[i].y){
                    grassArr.splice(i, 1);
                    break;}
                }}
                for(let i in grassEaterArr){
                if (this.x == grassEaterArr[i].x) {
                  if(this.y == grassEaterArr[i].y){
                    grassEaterArr.splice(i, 1);
                    break;}
                }
            }
        } else {
            this.move()
        }
    }

}

