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
  console.log("Listning on port "+PORT);
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
function convert(raw,smartConvert=true)
{
    let charactersUnicode= core.translate(data.data,data.smartConvert).split("#");
    let convertedCharacters="";
    charactersUnicode.forEach(element => {
      if(element)
        convertedCharacters+=String.fromCharCode(element.replace("¬",""));
    });
    return convertedCharacters;
}
if (require.main === module) {
    startServer();
}