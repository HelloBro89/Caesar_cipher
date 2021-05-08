const fs = require("fs");
const objectParams = require("./parsingParams");
const encode_decode = require("./fun_Encode_Decode");

// let str = `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`;
// let = str = `This is secret. Message about "_" symbol!`

let readableStream = fs.createReadStream(objectParams.input, "utf8");
let writeableStream = fs.createWriteStream(objectParams.output);

readableStream.on("data", function (chunk) {
    let text = encode_decode(chunk);
    writeableStream.write(text);
});