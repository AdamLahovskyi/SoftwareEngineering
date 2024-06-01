const Hero = require('./Hero');
class Paladin extends Hero {
    constructor(name) {
        super(name + " the Paladin");
    }
}
module.exports = Paladin;