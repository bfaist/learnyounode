var fs = require('fs')

var fb = fs.readFileSync(process.argv[2]);

var lines = fb.toString().split('\n');

console.log(lines.length - 1);
