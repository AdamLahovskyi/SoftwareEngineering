const Hero = require('./Hero');
class Warrior extends Hero {
    constructor(name) {
        super(name + " the Warrior");
    }
}
module.exports = Hero;