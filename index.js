/*eslint-disable*/
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/testjson', function (req, res) {
    res.set({
        // 'Access-Control-Allow-Origin': 'http://cwj.cn:6666',
        'Content-Type': 'text/plain',
        'Content-Length': '123',
        'ETag': '12345'
        })
    res.send('get');
});

app.options('/testjson', function (req, res) {
    res.set({
        'Access-Control-Allow-Origin': 'http://cwj.cc:7878',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',    
        'Access-Control-Allow-Headers': 'X-Custom-Header, Content-Type',
        'Access-Control-Max-Age': 86400,
        'Content-Type': 'text/plain',
        'Content-Length': '123',
        'ETag': '12345'
        })
    res.send('options');
});
app.post('/testjson', function (req, res) {
    res.set({
        'Access-Control-Allow-Origin': 'http://cwj.cc:7878',
        // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',    
        // 'Access-Control-Allow-Headers': 'X-Custom-Header, Content-Type',
        // 'Access-Control-Max-Age': 86400,
        'Content-Type': 'appliaction/json',
        'Content-Length': '123',
        'ETag': '12345'
        })
    res.send(JSON.stringify({A:'post ok',B:'post json'}));
});

var server = app.listen(7777, function () {
    var host = '127.0.0.1';
    var port = '6666';

    console.log('Example app listening at http://%s:%s', host, port);
});