var express = require('express');
var app = express();
var bp = require('body-parser');
var mysql = require('mysql');
var validator = require('validatorjs');
var questionnaire = [];

app.use('/questionnaire', express.static(__dirname + '/public'));

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));



var connection = mysql.createConnection({
	host: 'localhost',
	user: 'annie',
	password: '12345678',
	database: 'QUIZ'
})


connection.connect(function(err) 
{
	if (err) throw err
		console.log('You are now connected...');
	connection.query('SELECT * FROM questionnaire', function(err, results) 
	{
		if (err) throw err
			for (var i = 0; i < results.length; i++) 
			{
				questionnaire.push(results[i]);
			};
		});
});


	app.listen(8080, function() 
	{
		console.log('listening on port 8080!');
	});

// app.use("/static", express.static(__dirname + "/Public"));

app.get('/', function(req, res)
{
	res.send('Hello World');
});


app.get('/Question', function(req, res) {
	res.json(questionnaire);
	console.log(questionnaire);
});



