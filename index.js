import ceasar from './ceasar.js';
import atbash from './atbash.js';
import { inputFilePath, outputFilePath, cipherArr, configValid1 } from './config.js';
import { exampleConfig, error, error1, FileError } from './errors.js';

import fs from 'fs';
import stream from 'stream';
import readline from 'readline';
import { stdin, stdout } from 'process';

try {
    configValid1();
}
catch (err) {
    console.log(' ');
    console.error(`${err.name}: ${err.message}`);    
    exampleConfig();
}  

// console.log(inputFilePath);
// console.log(outputFilePath);

// const rl = readline.createInterface({ stdin, stdout });

// const answer = await rl.question('What do you think of Node.js? ');

// console.log(`Thank you for your valuable feedback: ${answer}`);

// rl.close();


function doCiphering(chunk, cipherArr) {
    let text = chunk.toString();
    for (let i = 0; i < cipherArr.length; i++) {
        if (cipherArr[i] === 'A') {
            text = atbash(text);            
        } else {
            text = ceasar(text, cipherArr[i]);            
        }
    }      
    return text;
}

class Cipher extends stream.Transform {
    constructor(options) {
        super(options)
    }
    _transform = function (chunk, enc, cb) {
        cb(null, doCiphering(chunk, cipherArr));
    }
}
    
stream.pipeline(
    fs.createReadStream(inputFilePath),
    new Cipher(),
    fs.createWriteStream(outputFilePath,{ flags: 'a'}),
    (err) => {
        if (err) {
            throw new Error('An error occured in the process.');          
        } else {
            console.log(' ');      
            console.log('Ciphering succesful!');
            console.log(' ');  
        }
    }
);  
