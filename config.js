/**
 * @ config
 */

var path = require('path')

var config = {
    remoteServer: {
        baseUrl: 'http://127.0.0.1:4001/',
        host: 'http://210.78.142.132/',
        // host: 'http://127.0.0.1',
        port: 4001
    },
    WebSocket: {
    	url: 'ws://127.0.0.1:4001'
    }
}


module.exports = config;
