const FileWriter = require('./FileWriter');
const FileLoggerAdapter = require('./FileLoggerAdapter');

let fileWriter = new FileWriter();
let fileLogger = new FileLoggerAdapter(fileWriter);

fileLogger.Log('This is a log message.');
fileLogger.Error('This is an error message.');
fileLogger.Warn('This is a warning message.');