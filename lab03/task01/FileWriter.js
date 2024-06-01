class FileWriter {
    Write(message) {
        console.log(`Writing: ${message}`);
    }

    WriteLine(message) {
        console.log(`Writing Line: ${message}`);
    }
}
module.exports = FileWriter;