var express     = require('express');
var minify = require('../index.js');

var app = express();



app.use(minify);
app.get('/', function(req, res){
   res.header("content-type", 'text/html')
   res.sendfile(__dirname+"/index.html");
});

app.listen(8081);
