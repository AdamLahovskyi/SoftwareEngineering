const iproneFactory = new IProneFactory();
const kiaomiFactory = new KiaomiFactory();
const balaxyFactory = new BalaxyFactory();

const iproneLaptop = iproneFactory.createDevice('Laptop');
const kiaomiSmartphone = kiaomiFactory.createDevice('Smartphone');
const balaxyEBook = balaxyFactory.createDevice('EBook');

console.log(iproneLaptop);
console.log(kiaomiSmartphone);
console.log(balaxyEBook);