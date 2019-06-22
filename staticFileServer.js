var http = require('http'),
  fs = require('fs');

  function serveStaticFiles(rsp, path, contentType, responseCode){
    if(!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function(err, data){
      if(err){
        rsp.writeHead(500, {'Content-Type': 'text/plain'});
        rsp.end('500 Internal Error');
      }else{
        rsp.writeHead(responseCode, {'Content-Type': 'text/html'});
        rsp.end(data)
      }
    });
  }

  http.createServer(function(req, rsp){
    var path = req.url.toLowerCase();
    switch(path){
      case '' :
      serveStaticFiles(rsp, '/public/home.html', 'text/html');
      break;
      case '/':
      serveStaticFiles(rsp, '/public/home.html', 'text/html');
      break;
      case '/about':
      serveStaticFiles(rsp, '/public/about.html', 'text/html');
      break;
      case '/img/logo.jpg':
      serveStaticFiles(rsp, '/public/img/logo.jpg', 'image/jpeg');
      default:
      serveStaticFiles(rsp, '/public/404.html', 'text/html', 404);
      break;
    }
  }).listen(3000);
