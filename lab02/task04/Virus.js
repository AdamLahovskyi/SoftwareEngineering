class Virus {
    constructor(weight, age, name, species, children = []) {
        this.weight = weight;
        this.age = age;
        this.name = name;
        this.species = species;
        this.children = children;
    }

    clone() {
        return new Virus(this.weight, this.age, this.name, this.species, this.children.map(child => child.clone()));
    }
}

module.exports = Virus;
