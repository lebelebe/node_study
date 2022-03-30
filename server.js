var express = require('express');
var app = express();
var postsend = require('./api/postsend');
var getsend = require('./api/getsend');
var sqlsend = require('./api/introduce');
var preinterview = require('./api/preinterview');

var time = new Date();

app.set('port', 8080); // var port = 8080;
app.listen(app.get('port'), function(){
    console.log(time+'서버작동성공')
});
app.get('/', (req, res) => {
    res.send('잘 나오고 있다던데?')
});

app.use('/postsend', postsend);
app.use('/getsend', getsend);
app.use('/introduce', sqlsend);
app.use('/preinterview', preinterview);

