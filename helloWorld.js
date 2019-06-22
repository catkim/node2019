var http = require('http');

http.createServer(function(req, rsp){
  rsp.writeHead(200, {'Content-Type': 'text/plain'});
  rsp.end('Hello world!');
}).listen(3000);

console.log("server started!  Use Crtl-c to stop");
