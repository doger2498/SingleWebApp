/**
 * @ config
 */

var path = require('path')

var config = {
    remoteServer: {
        baseUrl: 'http://localhost:4001/',
        //host: '10.57.224.187',
        host: 'localhost',
        port: 4000
    },
    WebSocket: {
    	// url: 'ws://127.0.0.1:4001'
    	url: 'ws://127.0.0.1:4001',
        host:'ws://127.0.0.1:',
        port: 4001
    }
}


module.exports = config;
