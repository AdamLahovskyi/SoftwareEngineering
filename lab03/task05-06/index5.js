const LightElementNode = require("./LightElementNode");
const LightTextNode = require("./LightTextNode");
let listItem1 = new LightElementNode('li', 'block', 'normal', ['list-item'], [new LightTextNode('Some item1')]);
let listItem2 = new LightElementNode('li', 'block', 'normal', ['list-item'], [new LightTextNode('some item12')]);
let unorderedList = new LightElementNode('ul', 'block', 'normal', ['list'], [listItem1, listItem2]);

let paragraph = new LightElementNode('p', 'block', 'normal', ['paragraph'], [new LightTextNode('Lorem ipsum dolor sit amet.')]);

let container = new LightElementNode('div', 'block', 'normal', ['container'], [unorderedList, paragraph]);
console.log(container.outerHTML);