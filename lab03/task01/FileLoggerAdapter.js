class FileLoggerAdapter {
    constructor(fileWriter) {
        this.fileWriter = fileWriter;
    }

    Log(message) {
        this.fileWriter.WriteLine(`[Log] ${message}`);
    }

    Error(message) {
        this.fileWriter.WriteLine(`[Error] ${message}`);
    }

    Warn(message) {
        this.fileWriter.WriteLine(`[Warn] ${message}`);
    }
}
module.exports = FileLoggerAdapter;