console.log('hello world');
var tabQuestions= [];

	$.ajax('/Question').done(function(questionnaire){
		for (var i = 0; i < questionnaire.length; i++) {
			tabQuestions.push(questionnaire[i]);
		}
});

console.log(tabQuestions);
// $.ajax({
// 		method: "GET",
// 		url: "/",
// 		data: {questionnaire}
// 	}).done(function()
// 	{	
// 		console.log(res);
// 	});