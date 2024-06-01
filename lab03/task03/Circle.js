const Shape = require("./Shape");

class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }
}
module.exports = Circle;