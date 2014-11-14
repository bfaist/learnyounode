var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var file = process.argv[3];
    var src = fs.createReadStream(file);
    var file_data = '';
    src.on('data', function(chunk) { file_data += chunk; });
    src.on('end', function() { res.end(file_data); });
});

server.listen(process.argv[2]);
