var express = require('express');
var app = express();
var bp = require('body-parser');
var mysql = require('mysql');
var validator = require('validatorjs');
var question = [];

app.use('/Quiz', express.static(__dirname + '/Public'));

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));


app.listen(8080, function() 
{
	console.log('listening on port 8080!');
});

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
				question.push(results[i]);
				//console.log(question);
			}
	});
});


app.get('/Question', function(req, res) {
	res.json(question);
	//console.log(question);
});



