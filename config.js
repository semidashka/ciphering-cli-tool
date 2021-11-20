import fs from 'fs';
import { URL } from 'url';
import { error, error1, FileError } from './errors.js';

let inputFilePath;
let outputFilePath;
let config;
let cipherArr;


function configValid1() { // whether config too short

    if (process.argv.length < 3) {
        error('configuration arguments are required for running this app.'); 
    } else 
    if (process.argv.length < 4) {
        error1();                       
    }
    else {
        config = process.argv.slice(2);
        configValid2();
    }
}

function configValid2() {  // whether has 'config' or '-c'

    if (config.length % 2 === 0) {
        
        if (config.indexOf('config') % 2 === 0)  {    
            cipherArr = config[config.indexOf('config') + 1].split('-');
            configUnique(config); 
        } else
        if (config.indexOf('-c') % 2 === 0) { 
            cipherArr = config[config.indexOf('-c') + 1].split('-');
            configUnique(config); 
        }    
        else error1();
    } 
    else error1();                          
}

function configUnique(arr) { // whether config has duplicates or too long

    if (config.length !== new Set(config).size) {
        error('configuration arguments are duplicated.');    
    } else 
    if (config.length > 6) {
        error('too many configurstion arguments'); 
    } else cipherConfigCheck();  
}

function cipherConfigCheck() { 

    for (let i = 0; i < cipherArr.length; i++) {
        if (cipherArr[i] !== 'A' && cipherArr[i] !== 'C1' && cipherArr[i] !== 'C0' && cipherArr[i] !== 'R1' && cipherArr[i] !== 'R0') {
          error('wrong cipher codes');  
        } 
    }
    configLengthCases();
}  

function configLengthCases() {
    switch(config.length) {
        case 2: 
        //const rl = readline.createInterface({ stdin, stdout });

        // const answer = await rl.question('What do you think of Node.js? ');
        
        // console.log(`Thank you for your valuable feedback: ${answer}`);
        
        // rl.close();
        // ASK FOR INPUT TEXT
        //  inputData =   
    // MAKE SURE IT CONTINUES ASKING FOR MORE AFTER CIPHERING 
            console.log (config);
            break;     
        case 4: 
            if (config.indexOf('-i') % 2 === 0) {    
                inputFilePath = new URL(config[config.indexOf('-i') + 1], import.meta.url);
                canReadFile(inputFilePath);  
            } else
            if (config.indexOf('-o') % 2 === 0) {      
                outputFilePath = new URL(config[config.indexOf('-o') + 1], import.meta.url);
                ifcanWriteFile(outputFilePath);            
            } else error1();  
            // ASK FOR INPUT TEXT
            //  inputData =   
            // MAKE SURE IT CONTINUES ASKING FOR MORE AFTER CIPHERING      
        
        case 6:
            if (config.indexOf('-i') % 2 === 0 && config.indexOf('-o') % 2 === 0)  {    
                inputFilePath = new URL(config[config.indexOf('-i') + 1], import.meta.url);
                canReadFile(inputFilePath);           
                outputFilePath = new URL(config[config.indexOf('-o') + 1], import.meta.url);
                canWriteFile(outputFilePath);            
            } else error('98');         //
    }
}

function canReadFile(filePath) {
    try {
        fs.accessSync(filePath, fs.constants.R_OK);
    }
    catch {
        throw new FileError(`cannot access ${filePath} for reading`);
    }    
}

function canWriteFile(filePath) {
    try {
        fs.accessSync(filePath, fs.constants.W_OK)
    }
    catch {
        throw new FileError(`cannot access ${filePath} for writing`);
    }    
}

// console.log(outputFilePath);
// console.log(cipherArr);

export { inputFilePath, outputFilePath, cipherArr, configValid1 };