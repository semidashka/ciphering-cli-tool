# semidashka-ciphering-cli-tool

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

Details:

Config option is required and should be validated. In case of invalid confing human-friendly error should be printed in stderr and the process should exit with non-zero status code.

If any option is duplicated (i.e. bash $ node my_ciphering_cli -c C1-C1-A-R0 -c C0) then human-friendly error should be printed in stderr and the process should exit with non-zero status code.

If the input file option is missed - use stdin as an input source.

If the output file option is missed - use stdout as an output destination.

If the input and/or output file is given but doesn't exist or you can't access it (e.g. because of permissions or it's a directory) - human-friendly error should be printed in stderr and the process should exit with non-zero status code.

If passed params are fine the output (file or stdout) should contain transformed content of input (file or stdin).

For encoding/decoding only English alphabet is used, all other characters are kept untouched.


Usage example:

$ node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
input.txt This is secret. Message about "_" symbol!

output.txt Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!

$ node my_ciphering_cli -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
input.txt This is secret. Message about "_" symbol!

output.txt Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!

$ node my_ciphering_cli -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"
input.txt This is secret. Message about "_" symbol!

output.txt Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!

$ node my_ciphering_cli -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"
input.txt This is secret. Message about "_" symbol!

output.txt This is secret. Message about "_" symbol!
