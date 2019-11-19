const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/submit', function (req, res) {

    var name = req.body.name;
    var email= req.body.email;
    var comment = req.body.comment;
    res.write('name:'+' '+name+'\n');
    res.write('email:'+' '+email+'\n');
    res.write('comment:'+' '+comment);
    res.send();
});

app.listen(8080, function () {
    console.log('Node server is running..');
});
