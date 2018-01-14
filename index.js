#!/usr/bin/node
var core = require("./core.js");
var http = require('http');
var qs = require('querystring');

const PORT =8058;
function startServer()
{
    http.createServer(function (req, res) {

        if (req.method === 'POST') {
          let body = '';
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
      }).listen(PORT);
}
function convert(raw,smartConvert)
{
    return translate(raw,smartConvert);
}
if (require.main === module) {
    startServer();
}