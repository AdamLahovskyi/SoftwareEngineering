const Shape = require("./Shape");

class Triangle extends Shape {
    constructor(base, height) {
        super('Triangle');
        this.base = base;
        this.height = height;
    }
}
module.exports = Triangle;