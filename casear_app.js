const fs = require("fs");
const { output } = require("./parsingParams");
const objectParams = require("./parsingParams");
const TransformStream = require('./transform');

const transform = new TransformStream();

if (objectParams.input == null && objectParams.output == null) {
    process.stdin.pipe(transform).pipe(process.stdout);

} else if (objectParams.input == null && objectParams.output !== null) {
    let writeableStream = fs.createWriteStream(objectParams.output, { flags: "a" });
    process.stdin.pipe(transform).pipe(writeableStream);

} else if (objectParams.input !== null && objectParams.output == null) {
    let readableStream = fs.createReadStream(objectParams.input, "utf8");
    readableStream.pipe(transform).pipe(process.stdout);
} else if (objectParams.input !== null && objectParams.output !== null) {
    let readableStream = fs.createReadStream(objectParams.input, "utf8");
    let writeableStream = fs.createWriteStream(objectParams.output, { flags: "a" });
    readableStream.pipe(transform).pipe(writeableStream);
} else {
    console.log(`Проверьте наличия файла "input.txt" или "output.txt" в текущей папке.`)
}
