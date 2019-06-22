var http = require('http');

http.createServer(function(req, rsp){

  var path = req.url;
  console.log(path, 'this is the request path');
  switch(path){
    case '/' :
      rsp.writeHead(200, {'Content-Type': 'text/plain'});
      rsp.end('Route Homepage!');
      break;
    case '/about' :
    rsp.writeHead(200, {'Content-Type': 'text/plain'});
    rsp.end('Route About page!');
    break;
  }

}).listen(3000);
