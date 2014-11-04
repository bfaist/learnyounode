var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
    var now = new Date();

    var date_time = strftime('%Y-%m-%d %H:%M', now.getFullYear(),
                                               now.getMonth(),
                                               now.getDate(),
                                               now.getHours(),
                                               now.getMinutes());
    
    socket.end(date_time + "\n");
});

server.listen(process.argv[2]);
