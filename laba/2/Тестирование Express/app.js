const express = require('express');
var app = express();

app.get('/', function (request, response) {
    response.send('Hello Test');
});

app.listen(3000);

module.exports.app = app;