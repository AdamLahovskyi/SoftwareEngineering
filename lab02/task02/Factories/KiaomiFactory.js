class KiaomiFactory extends BrandFactory {
    createDevice(model) {
        switch(model) {
            case 'Laptop':
                return new Laptop(model);
            case 'Netbook':
                return new Netbook(model);
            case 'EBook':
                return new EBook(model);
            case 'Smartphone':
                return new Smartphone(model);
            default:
                throw new Error('Unknown device type');
        }
    }
}