const http = require('http');
const iconv = require('iconv-lite');
function shownfo(url, callback) {
    if (url.length > 0) {
        http.get(url, function(resp) {
            const statusCode = resp.statusCode;
            if (statusCode !== 200) {
                callback('Error: HTTP ' + statusCode);
                return;
            }
            var chunks = [];
            resp.on('data', function(chunk) {
                chunks.push(chunk);
            });
            resp.on('end', function() {
                if (chunks.length > 0) {
                    var decoded = iconv.decode(Buffer.concat(chunks), 'cp437');
                    callback(iconv.encode(decoded, 'utf8').toString());
                } else {
                    callback('Error: No data received');
                }
            });
        }).on('error', function(error) {
            callback(error);
        });
    } else {
        callback('Error: Invalid URL');
    }
}
module.exports = shownfo;
