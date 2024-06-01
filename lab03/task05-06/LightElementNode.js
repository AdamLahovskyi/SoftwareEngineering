const LightNode = require("./LightNode");

class LightElementNode extends LightNode {
    constructor(tagName, displayType, closingType, cssClasses, children) {
        super();
        this.tagName = tagName;
        this.displayType = displayType;
        this.closingType = closingType;
        this.cssClasses = cssClasses;
        if (children) {
            this.children = children;
        }
    }

    get outerHTML() {
        let classes = this.cssClasses.length > 0 ? ` class="${this.cssClasses.join(' ')}"` : '';
        let openingTag = `<${this.tagName}${classes}>`;
        let closingTag = (this.closingType === 'selfClosing') ? '/>' : `</${this.tagName}>`;
        let innerHTML = this.children.map(child => child.outerHTML || child.text).join('');
        return `${openingTag}${innerHTML}${closingTag}`;
    }

    get innerHTML() {
        return this.children.map(child => child.outerHTML || child.text).join('');
    }
}
module.exports = LightElementNode;