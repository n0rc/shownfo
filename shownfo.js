const http = require('http');
const iconv = require('iconv-lite');
function shownfo(url, callback) {
    if (url.length > 0) {
        http.get(url, function(resp) {
            const {statusCode} = resp;
            if (statusCode !== 200) {
                callback('error: http ' + statusCode);
                return;
            }
            var ret = null;
            resp.on('data', function(chunk) {
                ret = chunk;
            });
            resp.on('end', function() {
                if (ret !== null) {
                    callback(iconv.encode(iconv.decode(ret, 'cp437'), 'utf8').toString())
                } else {
                    callback('error: no data received');
                }
            });
        });
    } else {
        callback('error: invalid url');
    }
}
module.exports = shownfo;
