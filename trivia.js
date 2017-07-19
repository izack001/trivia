

//these are the questions made into an object with multiple strings and arrays for the multiple choices//

var wins = 0;
var losses=0;
var questions = [
{
	question: "What is the NCAA basketball team with the most chapionships?",
	answers: ["UCLA","DUKE","USC","UCI"],
	rightAnswer:"UCLA",
},
{ 	question: "What is the number one sport in the world?",
	answers: ["Soccer","Cricket","Field Hockey","Basketball","Baseball","Football"],
	rightAnswer:"Soccer",
},
{	question: "What is the number one selling product in Amazon?",
	answers: ["Fidgets","Card Games","Echo Dot","3D Glasses"],
	rightAnswer:"Fidgets",
},

];

console.log(questions); //after console log all good!!// ok we are doing good//
 //creates and prints first question index 0 on the erray of object properies//
$("#question1").html(questions[0].question);


//loops and prints the array of strings....OF answers loops and prints in the console also grabs the values of the object so that you can later on work on functions//
for(var i=0; i<questions[0].answers.length; i++){
	console.log(questions[0].answers[i]);
	var choice = $("<div>");
	choice.html(questions[0].answers[i]);
	choice.attr("class", "choice");
	$("#choices").append(choice);
}

//second loop for the second question this time the loop starts at 1 due to the positon of the index//
//soccer best most popular sport in the world//
$("#question2").html(questions[1].question);

for(var i=0; i<questions[1].answers.length; i++){
	console.log(questions[1].answers[i]);
	var nextChoice = $("<div>");
	nextChoice.html(questions[1].answers[i]);
	nextChoice.attr("class", "choice");
	$("#choices2").append(nextChoice);
}


$("#question3").html(questions[2].question);

for(var i=0; i<questions[2].answers.length; i++){
	console.log(questions[2].answers[i]);
	var thirdChoice = $("<div>");
	thirdChoice.html(questions[2].answers[i]);
	thirdChoice.attr("class", "choice");
	$("#choices3").append(thirdChoice);
}

//event fuction for on click the right asnwer//

$("#choices .choice").on("click", function(){
	var pick = $(this).text();
	console.log(pick);
	if(pick==questions[0].rightAnswer){
		wins++
		console.log("wins"+wins);
	}
	
	else{
		losses++ 
		console.log("losses"+losses);
	}

	updateStats();
});


//second function for the second question this includes class and choices by grabbing any of the on clink choices in the erray//

$("#choices2 .choice").on("click", function(){
	var pick2 = $(this).text();
	console.log(pick2);
	if(pick2==questions[1].rightAnswer){
		wins++
		console.log(wins);
	}
	else{
		losses++
		console.log("losses"+losses);
	}
	updateStats();
});

$("#choices3 .choice").on("click", function(){
	var pick3 = $(this).text();
	console.log(pick3);
	if(pick3==questions[2].rightAnswer){
		wins++
		console.log(wins);
	}
	else{
		losses++
		console.log("losses"+losses);
	}
	updateStats();
});

function updateStats(){
	$("#wins").html(wins + " Wins");
	$("#losses").html(losses + " Losses");
}












