const LightNode = require("./LightNode");
const LightTextNode = require("./LightTextNode");
const LightElementNode = require("./LightElementNode");
const fs = require('fs');
class LightHTML {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    parseTextFromFile(filePath) {
        const text = fs.readFileSync(filePath, 'utf-8');
        this.parseText(text);
    }
    parseText(text) {
        const lines = text.split('\n');
        let currentParent = null;

        for (let line of lines) {
            let node = null;

            if (line.trim() === '') {
                continue;
            } else if (line.trim().length < 20) {
                node = new LightElementNode('h2', 'block', 'normal', [], [new LightTextNode(line)]);
            } else if (line.startsWith(' ')) {
                node = new LightElementNode('blockquote', 'block', 'normal', [], [new LightTextNode(line.trim())]);
            } else {
                node = new LightElementNode('p', 'block', 'normal', [], [new LightTextNode(line)]);
            }

            if (!this.root) {
                this.root = node;
            } else {
                currentParent.children.push(node);
            }

            currentParent = node;
            this.size++;
        }
    }

    getMemoryUsage() {
        const elementSize = 64;
        const textSize = 2;

        const stack = [this.root];
        let totalMemory = 0;

        while (stack.length > 0) {
            const node = stack.pop();

            totalMemory += elementSize;

            if (node instanceof LightTextNode) {
                totalMemory += node.text.length * textSize;
            }

            node.children.forEach(child => stack.push(child));
        }

        return totalMemory;
    }
}
module.exports = LightHTML;