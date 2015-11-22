var express = require ('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/assets', express.static('app_files/prod/assets'));
//app.use(express.static(path.join(__dirname, '/assets')));

app.locals.apptitle = "SuperMesh Node";

app.get('/', function(req, res) {
	res.render('default', {title: 'Home'});
})

app.get('/login', function(req, res) {
	res.render('login', {title: 'Login'});
})

app.get('/admin', function(req, res) {
	res.render('admin', {title: 'Controle Centre Admin'});
})

app.get('*', function(req, res) {
  res.send('Bad Route');
});

var server = app.listen(3000, function() {
	console.log('Listening on port 3000');
})
