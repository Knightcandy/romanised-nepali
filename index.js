#!/usr/bin/node
/**
 * File: index.js
 * Created Date: Sunday January 14th 2018
 * Author: Sujan Poudel
 * Last Modified:Sunday, January 14th 2018, 11:28:35 am
 * Copyright (c) 2018 https://github.com/psuzn
 */

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