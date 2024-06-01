const iproneFactory = new IProneFactory();
const kiaomiFactory = new KiaomiFactory();
const balaxyFactory = new BalaxyFactory();

let iproneLaptop = iproneFactory.createDevice('Laptop');
let kiaomiSmartphone = kiaomiFactory.createDevice('Smartphone');
let balaxyEBook = balaxyFactory.createDevice('EBook');

console.log(iproneLaptop);
console.log(kiaomiSmartphone);
console.log(balaxyEBook);