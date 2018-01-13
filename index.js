var core = require("./core.js");
try{
  var http = require('http');
  var qs = require('querystring');
}
catch (err){
  exit(1);
}

http.createServer(function (req, res) {

  if (req.method === 'POST') {
    var body = '';
    req.on('data', function(chunk) {
      body += chunk;
    });
    req.on('end', function() {
      var data = qs.parse(body);
      res.writeHead(200);
      var converted=core.translate(data.data,data.smartConvert);
      res.end(converted);
    });
  } else {
    res.writeHead(404);
    res.end();
  }

}).listen(1234);