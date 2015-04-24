//modules and configs
//===============================================
var express  = require('express'),
    router   = express.Router(),
    app      = express(),
    bodyParser = require('body-parser');

var port = process.env.PORT || 8000; //port set to 3000

//app specific configurations
//==================================================

app.use('/', express.static(__dirname + '/app/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//router configurations
//============================================

router.get('/', function (req, res) {
	res.render('/index.html');
});

app.use('/', router);

//run the server========================
var server = app.listen(port, function(){
	console.log('server has started running at localhost:' + port);
});
