class Shape {
    constructor(type) {
        this.type = type;
    }

    render(type) {
        console.log(`Drawing ${this.type} as ${type === 'vector' ? 'vector' : 'pixels'}`);
    }
}
module.exports = Shape;