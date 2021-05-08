module.exports = parsingParams();

function parsingParams() {
    let obj = {};
    if (process.argv.length > 2) {

        for (let i = 2; i < process.argv.length; i++) {

            if (process.argv[i] === "-a" || process.argv[i] === "--action") {
                if (process.argv[i + 1] === "encode" || process.argv[i + 1] === "decode") {
                    obj.action = process.argv[i + 1];
                    i;
                } else {
                    process.stderr.write(`После опции "-a" или "--action" необходимо ввести: "encode" или "decode".`)
                    process.exit(1);
                }
            } else if (process.argv[i] === "-s" || process.argv[i] === "--shift") {
                if (Number.isInteger(Number(process.argv[i + 1])) === true) {
                    obj.shift = Number(process.argv[i + 1]);
                    ++i;
                } else {
                    process.stderr.write(`После опции "-s" или "--shift" необходимо ввести целое число.`)
                    process.exit(1);
                }
            } else if (process.argv[i] === "-i" || process.argv[i] === "--input") {
                if (process.argv[i + 1] === "./input.txt") {
                    obj.input = process.argv[i + 1];
                    ++i;
                } else {
                    process.stderr.write(`После опции "-i" или "--input" необходимо ввести: "./input.txt".`)
                    process.exit(1);
                }
            } else if (process.argv[i] === "-o" || process.argv[i] === "--output") {
                if (process.argv[i + 1] === "./output.txt") {
                    obj.output = process.argv[i + 1];
                    ++i;
                } else {
                    process.stderr.write(`После опции "-o" или "--output" необходимо ввести: "./output.txt".`)
                    process.exit(1);
                }
            }
        }
    }
    if (!obj.action || !obj.shift) {
        process.stderr.write(`Проверьте введены ли следующие опции: "-a/--action", либо "-s/--shift".`)
        process.exit(1);
    }
    return obj;
}