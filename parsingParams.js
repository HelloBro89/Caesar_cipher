module.exports = parsingParams();

function parsingParams() {
   let obj = {};
   if (process.argv.length > 2) {
      for (let i = 2; i < process.argv.length; i++) {
         if (process.argv[i] === "-a" || process.argv[i] === "--action") {
            if (
               process.argv[i + 1] === "encode" ||
               process.argv[i + 1] === "decode"
            ) {
               obj.action = process.argv[i + 1];
               i;
            } else {
               process.stderr.write(
                  `After option "-a" or "--action" you need input: "encode" or "decode".`
               );
               process.exit(1);
            }
         } else if (process.argv[i] === "-s" || process.argv[i] === "--shift") {
            if (Number.isInteger(Number(process.argv[i + 1])) === true) {
               obj.shift = Number(process.argv[i + 1]);
               ++i;
            } else {
               process.stderr.write(
                  `After option "-s" or "--shift" you need input integer number.`
               );
               process.exit(1);
            }
         } else if (process.argv[i] === "-i" || process.argv[i] === "--input") {
            if (process.argv[i + 1] === "./input.txt") {
               obj.input = process.argv[i + 1];
               ++i;
            } else {
               process.stderr.write(
                  `After option "-i" or "--input" you need input: "./input.txt".`
               );
               process.exit(1);
            }
         } else if (
            process.argv[i] === "-o" ||
            process.argv[i] === "--output"
         ) {
            if (process.argv[i + 1] === "./output.txt") {
               obj.output = process.argv[i + 1];
               ++i;
            } else {
               process.stderr.write(
                  `After option "-o" or "--output" you need input: "./output.txt".`
               );
               process.exit(1);
            }
         }
      }
   }
   if (!obj.action || !obj.shift) {
      process.stderr.write(
         `Check if the following options have been entered: "-a/--action", либо "-s/--shift".`
      );
      process.exit(1);
   }
   return obj;
}
