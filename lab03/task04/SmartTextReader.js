const fs = require('fs');

class SmartTextReader {
    constructor(filePath) {
        this.filePath = filePath;
    }

    readText() {
        try {
            let fileContent = fs.readFileSync(this.filePath, 'utf8');
            let lines = fileContent.split('\n');
            return lines.map(line => line.split(''));
        } catch (error) {
            console.error("Error reading file:", error);
            return null;
        }
    }
}
module.exports=SmartTextReader;