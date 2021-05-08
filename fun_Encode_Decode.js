const objectParams = require("./parsingParams");

module.exports = function (text) {
    let shiftDigit;
    let resultEncode = "";
    let startLargeRegister = 64;
    let finishLargeRegister = 91;
    let startSmallRegister = 96;
    let finishSmallRegister = 123;

    objectParams.shift = objectParams.action === "decode" ? objectParams.shift - (objectParams.shift * 2) : objectParams.shift;
    objectParams.shift = (objectParams.shift < 0) ? 26 - (objectParams.shift - (objectParams.shift * 2)) : objectParams.shift;

    for (let i = 0; i < text.length; i++) {

        if (text.codePointAt(i) > startLargeRegister && text.codePointAt(i) < finishLargeRegister ||
            text.codePointAt(i) > startSmallRegister && text.codePointAt(i) < finishSmallRegister) {

            shiftDigit = (objectParams.shift < 26) ? objectParams.shift : objectParams.shift % 26;

            if (text.codePointAt(i) < finishLargeRegister) {

                if ((finishLargeRegister - text.codePointAt(i)) > shiftDigit) {
                    resultEncode += String.fromCodePoint(text.codePointAt(i) + shiftDigit);

                } else {
                    resultEncode += String.fromCodePoint(startLargeRegister + (shiftDigit - (90 - text.codePointAt(i))));
                }

            } else if ((finishSmallRegister - text.codePointAt(i)) > shiftDigit) {
                resultEncode += String.fromCodePoint(text.codePointAt(i) + shiftDigit);
            } else {
                resultEncode += String.fromCodePoint(startSmallRegister + (shiftDigit - (122 - text.codePointAt(i))));
            }
        } else {
            resultEncode += String.fromCodePoint(text.codePointAt(i));
        }
    }
    return resultEncode;
}