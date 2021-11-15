import fs from 'fs';
import { URL } from 'url';


let inputFilePath;
let outputFilePath;
let config;
let cipherArr;


function error1() {
    console.error('Input error: Wrong configuration arguments.');
    console.log(' ');
    console.log('   Please, enter configuration arguments in the following format:')
    console.log(' ');
    console.log('       node ciphering-cli-tool config "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"');
    console.log(' ');    
}

function error2() {
    console.error('Input error: Configuration arguments are duplicated.');
    console.log(' ');
    console.log('   Please, enter configuration arguments in the following format:')
    console.log(' ');
    console.log('       node ciphering-cli-tool config "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"');
    console.log(' ');
}

function configValid1() {

    if (process.argv.length < 4) {
        error1(); 
    }
    else {
        config = process.argv.slice(2);
        cipherArr = config[1].split('-');
        configValid2();
    }
}

function configValid2() {

    if (config.length % 2 === 0  && config.length <= 6) {
        
        if (config.indexOf('config') === 0 || config.indexOf('-c') === 0) {
            
            configUnique(config); 
        } 
        else { error1(); } 
    } 
    else { 
        error1(); 
    }
}

function configUnique(arr) {

  if (config.length !== new Set(config).size) {
    error2();    
  }
  else {
    cipherConfigCheck();
  }
}

function cipherConfigCheck() {

    for (let i = 0; i < cipherArr.length; i++) {
        if (cipherArr[i] !== 'A' && cipherArr[i] !== 'C1' && cipherArr[i] !== 'C0' && cipherArr[i] !== 'R1' && cipherArr[i] !== 'R0') {
          error1();  
        } 
    }
    checkLengh4();
}  

function checkLengh4() {
    if (config.length === 4) {
        if (config[2] !== '-i' && config[2] !== '-o') {
            error1();
        } else
        if (config.indexOf('-i') === 2 ) {
            inputFilePath = new URL(config[3], import.meta.url);
            inputData = checkFilePath(inputFilePath);            
        } 
        else {
            outputFilePath = new URL(config[3], import.meta.url);
            checkFilePath(outputFilePath);
    // ASK FOR INPUT TEXT
        //  inputData =   
    // MAKE SURE IT CONTINUES ASKING FOR MORE AFTER CIPHERING         
        }
    } 
    else checkLengh6();
}

function checkFilePath (filePath) {

    let fileData;
    try {
    fileData = fs.readFileSync(filePath)
        }
    catch (err) {
            error1(); // cannot access file
    }    
    return fileData.toString();    
} 

function checkLengh6() {

    if (config[2] !== '-i' && config[2] !== '-o') {
        error1();
    } else 
    if (config[4] !== '-i' && config[4] !== '-o') { 
        error1();
    }
    else {
        inputFilePath = new URL(config[config.indexOf('-i') + 1], import.meta.url);
        checkFilePath(inputFilePath); 
        outputFilePath = new URL(config[config.indexOf('-o') + 1], import.meta.url);
        checkFilePath(outputFilePath);
    } 
}

// console.log(inputData);
// console.log(outputFilePath);
// console.log(cipherArr);

export { inputFilePath, outputFilePath, cipherArr, configValid1 };



