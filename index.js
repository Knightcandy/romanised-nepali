import http from 'http';
import * as qs from querystring ;
import {translate} from './core';
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
            var converted=translate(data.data,data.smartConvert);
            res.end(converted);
            //  console.log("raw input:"+data.data);
            //  console.log("converting with smartConvert="+data.smartConvert);
            // console.log("send after converted"+converted+"|");

          });
        } else {
          res.writeHead(404);
          res.end();
        }
      }).listen(PORT);
}
export function convert(raw,smartConvert)
{
    return translate(raw,smartConvert);
}
if (require.main === module) {
    startServer();
}