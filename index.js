import ceasar from './ceasar.js';
import atbash from './atbash.js';

import fs from 'fs';
import { URL } from 'url';

let inputData;
let outputFilePath;


function error1() {
    console.log('Input error: Wrong configuration arguments.');
    console.log('Please, enter configuration arguments in the following format:')
    console.log('      node ciphering-cli-tool config "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"');
}

function error2() {
    console.log('Input error: Configuration arguments are duplicated./n Please, enter configuration arguments in the following format:/n     node ciphering-cli-tool config "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"');
}

let config = process.argv.slice(2);
const cipherArr = config[1].split('-');

if (config.length % 2 === 0
  && config.length <= 6    
  && config.indexOf('config') === 0 
  || config.indexOf('-c') === 0) {

    configUnique(config); 
} 
else {
    error1();  
} 

function configUnique(arr) {

  if (config.length !== new Set(config).size) {
    error2();    
  } else {
    configLengthCheck(config);
  }
}

function configLengthCheck(arr) {

    if (config.length > 6 ) {
      error1();    
    } 
    else {    
      cipherConfigCheck();
    }
} 

function cipherConfigCheck() {

    for (let i = 0; i < cipherArr.length; i++) {
        if (cipherArr[i].length === 1 && cipherArr[i] !== 'A') {
            error1();      
        } else if (cipherArr[i].length > 2) {
            error1();     
        } else if (cipherArr[i] !== 'C1' || cipherArr[i] !== 'C0' || cipherArr[i] !== 'R1' || cipherArr[i] !== 'R0') {
            error1();  
        } else { 
            checkLengh4();
        }
    }
}  

function checkLengh4() {
    if (config.length === 4) {
        if (config[2] !== '-i' && config[2] !== '-o') {
            error1();
        } else
        if (config.indexOf('-i') === 2 ) {
            return inputData = checkFilePath(config[3]); 
        } 
        else {
            outputFilePath = config[3];
            checkFilePath(outputFilePath);
    // ASK FOR INPUT TEXT
        //  inputData =   
    // MAKE SURE IT CONTINUES ASKING FOR MORE AFTER CIPHERING         
        }
    } 
    else checkLengh6();
}

function checkLengh6() {
    if (config[2] !== '-i' && config[2] !== '-o') {
        error1();
    } else
    if (config.indexOf('-i') === 2 || config.indexOf('-i') === 4) {
        inputData = checkFilePath(config[3]); 
        outputFilePath = config[5];
        checkFilePath(outputFilePath);
    } 
}

function checkFilePath (filePath) {
    const output = fs.readFile(new URL(filePath, import.meta.url), (err, data) => {
      if (err) {
          throw err;
      }
    console.log(data.toString());
    })
}      
