# Description

This is a command line application. It encrypts or decrypts text. Method name "Caesar cipher".
This cipher shifts each letter of the Latin alphabet by the number of positions that you specify to either side. It encrypts / decrypts
only letters of the Latin alphabet in upper or lower case (characters and spaces are not encrypted).

## Instrustion for use

1. git clone https://github.com/HelloBro89/Caesar_task.git
2. Start command line and go to app's file
3. App is ready for use.

## Application Commands

On the command line, you need to write "node caesar_app.js" <options>. Where OPTIONS accept
the following parametrs:

```
1. -s or --shift <number>: shifts a character by the specified integer (no fractional part) negative / positive number (**this is a required parameter**)
2. -а or --action <encode or decode>: instructs the application to encrypt or decrypt the text (**this is a required parameter**)
3. 3. -i or --input <./input> : where "./input.txt" file name with information, you need decrypt/encrypt (**this is an optional parameter**)
4. -o or --output <./output> : where "./output.txt" the name of the file into which the encrypted / decrypted, will be written information(**this is an optional parameter**)
```

_P.s. points 1 and 2 must be fulfilled_

** _If the data of point 4 are not entered, then the decrypted / encrypted information will be displayed in the console._
_After finishing work, you need to press_ ** Ctrl + c **.
** _If the data of point 3 are not entered, then the information that needs to be decrypted / encrypted must be entered into the console._
_After finishing work, you need to press_ ** Ctrl + c **.
** _If the parameters from points 3 and 4 are not entered, all the work will be carried out in the command line and after the end of the work you need to press_ ** Ctrl + c .

### Usage example

The file "input.txt" has:
"This is secret. Message about "\_" symbol!"

command line input:
$ node caesar_app -a encode -s 7 -i "./input.txt" -o "./output.txt

in the file "output.txt" will appear:
Aopz pz zljyla. Tlzzhnl hivba "\_" zftivs!

                 **or**

command line input :
$ node caesar_app -a encode -s 7
$ Hello World!

command line outnput:
$ Olssv Dvysk!

Have a nice work!
