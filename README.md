# semidashka-ciphering-cli-tool
To run the app you should enter:

$ node ciphering-cli-tool config "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"

or

$ node ciphering-cli-tool -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"

or 

node ciphering-cli-tool -c "C1-C1-R0-A" -i "./input.txt"

or 

$ node ciphering-cli-tool -c "C1-C1-R0-A" -o "./output.txt"

or

$ node ciphering-cli-tool -c "C1-C1-R0-A" 



Usage examples:

$ node ciphering-cli-tool -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"

input.txt This is secret. Message about "_" symbol!

output.txt Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!


$ node ciphering-cli-tool -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"

input.txt This is secret. Message about "_" symbol!

output.txt Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!


$ node ciphering-cli-tool -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"

input.txt This is secret. Message about "_" symbol!

output.txt Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!


$ node ciphering-cli-tool -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"

input.txt This is secret. Message about "_" symbol!

output.txt This is secret. Message about "_" symbol!


CLI tool accepts 3 options (short alias and full name):

-c, --config  - config for ciphers which is a string with pattern {XY(-)}n, where:
  
  X is a cipher mark:
    C is for Caesar cipher (with shift 1)
    A is for Atbash cipher
    R is for ROT-8 cipher

  Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
    1 is for encoding
    0 is for decoding

  -i, --input: a path to input file

  -o, --output: a path to output file
  
For example, config "C1-C1-R0-A" means "encode by Caesar cipher => encode by Caesar cipher => decode by ROT-8 => use Atbash"

For encoding/decoding only English alphabet is used, all other characters are kept untouched.


