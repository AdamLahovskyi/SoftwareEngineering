const LightHTML = require("./LightHTML");

let lightHTML = new LightHTML();
lightHTML.parseTextFromFile('pg1513.txt');

console.log(`Використано пам'яті: ${lightHTML.getMemoryUsage()} байт`);