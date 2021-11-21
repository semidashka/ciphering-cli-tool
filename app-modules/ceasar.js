// Caesar cipher
export default function ceasar (message, XY) {
  
  let shift;
  switch (XY) {
    case 'C1': 
      shift = 1; // cipher Ceasar 1
      break;
    case 'C0':
      shift = 25; // cipher Ceasar 1
      break;
    case 'R1': 
      shift = 8; // cipher ROT-8
      break;
    case 'R0':
      shift = 18; // decipher ROT-8
      break;  
  }

  let ciphered = '';

  for (let i = 0; i < message.length; i++) {
    
    if (!message[i].match(/[a-z]/i)) {      
      // so it is a non-letter symbol  
      ciphered += message[i];
    } 
    else {
      // it is a letter
      let code = message.charCodeAt(i);

      // uppercase
      if (code >= 65 && code <= 90) {
        ciphered += String.fromCharCode(((code - 65 + shift) % 26) + 65);         
      } else 
      // lowercase
      if (code >= 97 && code <= 122) {
        ciphered += String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }  
    }       
  }
return ciphered;
}