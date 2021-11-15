import ceasar from './ceasar.js';
import atbash from './atbash.js';
import { inputFilePath, outputFilePath, cipherArr, configValid1 } from './config.js';

import fs from 'fs';
import stream from 'stream';
import util from 'util';
import { URL } from 'url';

configValid1();

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
          console.log('Ciphering succesful!');
        }
    }
);   
