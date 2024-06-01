class Logger {
    Log(message) {
        console.log(`%c${message}`, 'color: green');
    }

    Error(message) {
        console.error(`%c${message}`, 'color: red');
    }

    Warn(message) {
        console.warn(`%c${message}`, 'color: orange');
    }
}
module.exports = Logger;