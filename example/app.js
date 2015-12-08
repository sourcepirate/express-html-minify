var express     = require('express');
var minify = require('../index.js');

var app = express();




app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(minify);
app.get('/', function(req, res){
   res.header("content-type", 'text/html')
   res.render('index',{
     message: "hello"
   })
});

app.listen(8081);
