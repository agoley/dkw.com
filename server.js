// Express server for DKW Communications Demo 
var express = require('express');
var app = express();

app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', req.headers.origin );
	res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 
    	'Content-Type, Authorization, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS'){
        res.send(200);
    } else {
		next();
	}
});

app.engine('.html', require('ejs').__express);
app.use(express.static('./public'));
app.set('views', __dirname + '/public/views');
app.set('view engine', 'html');

app.get('/', function(req, res){
	res.render('index');
});

app.listen(process.env.PORT || 3000, function () {
   console.log('DEMO TIME!');
});