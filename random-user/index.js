var express = require('express'),
route = require('./routes/routes.js');

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname + '/public'));

app.get('/', route.index);
app.get('/app', route.api);

app.listen(3000);
