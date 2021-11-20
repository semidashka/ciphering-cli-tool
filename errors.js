class ConfigError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ConfigError'
    }
}

class FileError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FileError'
    }
}

function error(message) {
    throw new ConfigError(message);
}

function error1() {
    throw new ConfigError('configuration arguments error.');
}

function exampleConfig() {

    console.log('    Please, enter configuration arguments in the following format:')
    console.log('       node ciphering-cli-tool config "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"');
    console.log('    or ');
    console.log('       node ciphering-cli-tool config "C1-C1-R0-A"');
    console.log(' ');       
}

export { error, error1, FileError, exampleConfig };