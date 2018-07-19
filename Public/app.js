console.log('hello world');
var tabQuest = [];

$.ajax(
{
	method: "GET",
	url: "/Question"
}).done(function(question)
{
	for (var i = 0; i < question.length; i++) 
	{
		tabQuest.push(
		{
			id : question[i].id,
			Qt : question[i].Question,
			Rep1 : question[i].RepF1,
			Rep2 : question[i].RepF2,
			Rep3 : question[i].RepF3,
			Rep4 : question[i].RepT
		});

}
});


$('#deb').click(function()
{
	var tableau_melange = [];
	var rep_melange = [];
	var reponses = [];

	$('#jeu').empty();

	do
	{
		var l = Math.floor( Math.random() * tabQuest.length );
		var qt_alea = tabQuest[l];

		tableau_melange.push(qt_alea);

		tabQuest.splice(l,1);
	}
	while( tabQuest.length>0 );

	var R1 = tableau_melange[0].Rep1;
	var R2 = tableau_melange[0].Rep2;
	var R3 = tableau_melange[0].Rep3;
	var R4 = tableau_melange[0].Rep4;

	rep_melange.push(R1);
	rep_melange.push(R2);
	rep_melange.push(R3);
	rep_melange.push(R4);

	do
	{
		var r = Math.floor( Math.random() * rep_melange.length );
		var rep_alea = rep_melange[r];

		reponses.push(rep_alea);

		rep_melange.splice(r,1);
	}
	while( rep_melange.length>0 );


$('#jeu').append('<h4>'+ tableau_melange[0].Qt + '</h4>');
$('#jeu').append('<tr><td>'+ reponses[0] + '</td><td>' + reponses[1] + '</td></tr>');
$('#jeu').append('<tr><td>'+ reponses[2] + '</td><td>' + reponses[3] + '</td></tr>');

});
