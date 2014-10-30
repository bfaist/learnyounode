var fs = require('fs');
var p = require('path');

fs.readdir(process.argv[2], function(err, list) {
    var ext = '.' + process.argv[3];

    for(var f = 0; f < list.length; f++) {
        if(p.extname(list[f]) == ext) {
            console.log(list[f]);
        } 
    }
});
