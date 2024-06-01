const Virus = require('./Virus');

const firstGeneration = [
    new Virus(1, 1, "Virus1", "Species1"),
    new Virus(2, 2, "Virus2", "Species2"),
    new Virus(3, 3, "Virus3", "Species3")
];

firstGeneration[0].children.push(new Virus(0.5, 1, "Child1", "Species1"));
firstGeneration[0].children.push(new Virus(0.7, 1, "Child2", "Species1"));
firstGeneration[1].children.push(new Virus(1.5, 2, "Child3", "Species2"));
firstGeneration[1].children.push(new Virus(1.8, 2, "Child4", "Species2"));
firstGeneration[2].children.push(new Virus(2.5, 3, "Child5", "Species3"));
firstGeneration[2].children.push(new Virus(2.8, 3, "Child6", "Species3"));

const clonedViruses = firstGeneration.map(virus => virus.clone());

console.log(firstGeneration);
console.log(clonedViruses);
