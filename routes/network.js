var express = require('express');
var fs = require('fs');
var router = express.Router();

// SuperMesh app functions
var SuperMesh = require("../private/js/app_functions.js");

/* GET network settings. */
router.get('/', function(req, res, next) {
  res.render('network', {title: 'Controle Centre Admin'});
});

router.get('/getip', function(req, res, next) {

	var ifoutput;
	fs.readFile('private/system_scripts/interfaces.data', 'utf8', function (err, data) {
	  if (err) throw err;
	  ifoutput = JSON.parse(data);
	  res.send(ifoutput);
	});

	//var ifoutput = SuperMesh.ExecuteProcess('private/system_scripts/read_wlan0.sh','', function(Output) {
		//console.log(Output);
		//res.send(Output);
	//});

	//console.log(SuperMesh.ExecuteProcess('echo','Hello'));
	//console.log('IfOutput: ' + ifoutput);
	//res.send('<h1>Ready to get IP Addresses.</h1><pre>' + ifoutput + '</pre>');
});

module.exports = router;
