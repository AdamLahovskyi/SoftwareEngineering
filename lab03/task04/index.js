const SmartTextReader = require("./SmartTextReader");
const SmartTextReaderLocker = require("./SmartTextReaderLocker");
const SmartTextChecker = require("./SmartTextChecker");

let smartTextReader = new SmartTextReader("example.txt");
let smartTextChecker = new SmartTextChecker(smartTextReader);
smartTextChecker.readText();

let restrictedReader = new SmartTextReaderLocker(smartTextReader, /restricted_files\/.*/);
let restrictedChecker = new SmartTextChecker(restrictedReader);
restrictedChecker.readText();
