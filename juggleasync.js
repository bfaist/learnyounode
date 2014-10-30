var http = require('http');

var urls = process.argv.slice(2,5);

var url_res_text = {};

var end_counter = 0;

function print_urls() {
    urls.forEach(function(u) { console.log(url_res_text[u]); });
}

urls.forEach(function(u) {
    http.get(u, function(res) {
         var res_text = '';
         res.setEncoding('utf8');
         res.on('data', function(chunk) { res_text = res_text + chunk; });
         res.on('end', function() { end_counter++;
                                    url_res_text[u] = res_text;
                                    if(end_counter == 3) { print_urls(); } });
    });
});

