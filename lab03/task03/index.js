const Circle = require("./Circle");
const Square = require("./Square");
const Triangle = require("./Triangle");

let circle = new Circle(5);
let square = new Square(4);
let triangle = new Triangle(3, 4);

circle.render('vector');
square.render('pixels');
triangle.render('vector');