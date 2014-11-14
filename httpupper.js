var http = require('http');

var server = http.createServer(function(req, res) {
    if(req.method == 'POST') {
        req.setEncoding('utf8');
        var post_body = '';
        req.on('data', function(chunk) { post_body += chunk });
        req.on('end', function() { res.end(post_body.toUpperCase()); });
    }
});

server.listen(process.argv[2]);
