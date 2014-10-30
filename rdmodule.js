var fs = require('fs');
var p = require('path');

function rd(dir_name, file_ext, callback) {

    fs.readdir(dir_name, function(err, list) {
         if(err)
             return callback(err);

         var ext = '.' + file_ext;

         var files = [];

         for(var f = 0; f < list.length; f++) {
            if(p.extname(list[f]) == ext) {
                 files.push(list[f]);
            }
         }

         callback(null, files);
    });
}

module.exports = rd;
