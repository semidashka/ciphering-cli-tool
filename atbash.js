export default function atbash (message) {
  
  let ciphered = '';

  for (let i = 0; i < message.length; i++) {
    
    if (!message[i].match(/[a-z]/i)) {      
      // so it is a non-letter symbol  
      ciphered += message[i];
    } 
    else {
      // so it is a letter

      let code = message.charCodeAt(i);      

      if (code <= 90) {
        // so it is uppercase
        // 65(A) + 90(Z) = 155          
        ciphered += String.fromCharCode(155 - code);  
      }
      else {
        // so it is lowercase 
        // 97(a) + 122(z) = 219       
        ciphered += String.fromCharCode(219 - code);      
      }
    }  
  }
  console.log(ciphered);
  return ciphered;
}

