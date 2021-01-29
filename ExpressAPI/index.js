'use strict';
const express = require('express');
const app = new express();
var port = process.env.PORT || 1337;

app.get('/', (req, res) => {
    res.send("{ 'hi': 'there' }");
});

app.listen(port);