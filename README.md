##express-html-minify


A html-minifier middleware for expressjs


##installation
```
npm install express-html-minify

```

##usage

```javascript

var express     = require('express');
var minify = require('express-html-minify');

var app = express();
app.use(minify);

app.get('/', function(req, res){
   res.header("content-type", 'text/html')
   res.sendfile(__dirname+"/index.html");
});

app.listen(8081);

```

##LICENSE

BSD
