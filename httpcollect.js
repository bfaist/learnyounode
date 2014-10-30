var http = require('http');

var response_text = '';

http.get(process.argv[2], function(res) {
   res.setEncoding('utf8');
   res.on('data', function(chunk) { response_text = response_text + chunk; });
   res.on('end', function() { 
      console.log(response_text.length);
      console.log(response_text);
   });
});

