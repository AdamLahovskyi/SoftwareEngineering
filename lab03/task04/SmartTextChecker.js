class SmartTextChecker {
    constructor(smartTextReader) {
        this.smartTextReader = smartTextReader;
    }

    readText() {
        console.log("Opening file...");
        let text = this.smartTextReader.readText();
        console.log("File read successfully.");
        console.log(`Total lines: ${text.length}`);
        console.log(`Total characters: ${text.reduce((acc, val) => acc + val.length, 0)}`);
        console.log("Closing file...");
        return text;
    }
}

module.exports = SmartTextChecker;