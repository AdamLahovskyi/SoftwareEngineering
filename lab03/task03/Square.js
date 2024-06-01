const Shape = require("./Shape");

class Square extends Shape {
    constructor(sideLength) {
        super('Square');
        this.sideLength = sideLength;
    }
}

module.exports = Square;