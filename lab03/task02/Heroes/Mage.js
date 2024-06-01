const Hero = require('./Hero');
class Mage extends Hero {
    constructor(name) {
        super(name + " the Mage");
    }
}
module.exports = Mage;