const fs = require("fs");
const objectParams = require("./parsingParams");
const TransformStream = require("./transform");
const pathInput = __dirname + "/input.txt";

const transform = new TransformStream();

if (objectParams.input == null && objectParams.output == null) {
   process.stdin.pipe(transform).pipe(process.stdout);
} else if (objectParams.input == null && objectParams.output !== null) {
   let writeableStream = fs.createWriteStream(objectParams.output, {
      flags: "a",
   });
   process.stdin.pipe(transform).pipe(writeableStream);
} else if (objectParams.input !== null && objectParams.output == null) {
   fs.access(pathInput, fs.F_OK, (err) => {
      if (err) {
         console.error(
            `Error: Уou are missing the file "input.txt" in the current folder!`
         );
         process.exit(2);
      }
      let readableStream = fs.createReadStream(objectParams.input, "utf8");
      readableStream.pipe(transform).pipe(process.stdout);
   });
} else if (objectParams.input !== null && objectParams.output !== null) {
   fs.access(pathInput, fs.F_OK, (err) => {
      if (err) {
         console.error(
            `Error: The file "input.txt" is missing in current folder!`
         );

         process.exit(2);
      }
      let readableStream = fs.createReadStream(objectParams.input, "utf8");
      let writeableStream = fs.createWriteStream(objectParams.output, {
         flags: "a",
      });
      readableStream.pipe(transform).pipe(writeableStream);
   });
}
