const Transform = require("stream").Transform,
   util = require("util");

const encode_decode = require("./fun_Encode_Decode");

const TransformStream = function () {
   Transform.call(this, {objectMode: true});
};
util.inherits(TransformStream, Transform);

TransformStream.prototype._transform = function (chunk, encoding, callback) {
   chunk = chunk.toString();
   let text = encode_decode(chunk);
   this.push(text);
   callback();
};

module.exports = TransformStream;
