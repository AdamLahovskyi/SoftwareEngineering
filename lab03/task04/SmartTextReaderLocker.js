class SmartTextReaderLocker {
    constructor(smartTextReader, regex) {
        this.smartTextReader = smartTextReader;
        this.regex = regex;
    }

    readText() {
        const filePath = this.smartTextReader.filePath;
        if (filePath.match(this.regex)) {
            console.log("Access denied!");
            return null;
        } else {
            return this.smartTextReader.readText();
        }
    }
}

module.exports = SmartTextReaderLocker;
