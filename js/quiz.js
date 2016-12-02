$(function(){
	var selectedQuiz = "";
	var shownOnce = false;
    var loading = $('#loadbar').hide();
    
	$(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
    	loading.hide();
    });
		
	$("#closeBtn").on('click', function() {
		$.fn.fullpage.setAllowScrolling(true);
	});

	$(".quizBtn").on('click',function () {
		if (this.id != "") selectedQuiz = this.id;
		shownOnce = false;
		$(".img-responsive").remove(); // remove the image
	});
	
	$(".btn").on('click',function () {
		
    	var choice = $(this).find('input:radio').val();
		console.log(this.id + choice + " " +selectedQuiz);
		
		if (selectedQuiz == "quiz1") {
			$("#question").text("Phishing emails are fake emails that appear to come from legitimate sources?");
			$("#ch1").html("True");
			$("#ch2").html("False");
			$("#ch3").parent().addClass("hidden");
			$("#ch4").parent().addClass("hidden");
		} 
		else if (selectedQuiz == "quiz2") {
			$("#question").text("My anti-virus software will always protect me against phishing attacks.");
			$("#ch1").html("True");
			$("#ch2").html("False");
			$("#ch3").parent().addClass("hidden");
			$("#ch4").parent().addClass("hidden");
		}
		else if (selectedQuiz == "quiz3") {
			$("#question").text("Is this a legitimate email?");
			$("#ch1").html("Legitimate");
			$("#ch2").html("Phishing");
			$("#ch3").parent().addClass("hidden");
			$("#ch4").parent().addClass("hidden");
			
			if (!shownOnce) {
				$(".modal-header").append("<img class='img-responsive' src='img/awareness_q3.png' alt='awareness' width='460' height='345'>");
				shownOnce = true;
			}
		}
		else if (selectedQuiz == "quiz4") {
			$("#question").text("What do we look for in a phishing email?");
			$("#ch1").html("Spelling & grammar");
			$("#ch2").html("Links in email");
			$("#ch3").html("Popular company");
			$("#ch4").html("All of the above");
			
			if (!shownOnce) {
				$(".modal-header").append("<img class='img-responsive' src='img/accident_handling.png' alt='awareness' width='460' height='345'>");
				shownOnce = true;
			}
		}
		else if (selectedQuiz == "quiz5") {
			$("#question").text("The best way to identify a phishing email is by checking the sender's email address.");
			$("#ch1").html("True");
			$("#ch2").html("False");
			$("#ch3").parent().addClass("hidden");
			$("#ch4").parent().addClass("hidden");
		}
		else if (selectedQuiz == "quiz6") {
			$("#question").text(
				"You are a ‘very heavy’ user of mobile apps. You have apps that are being used by your kids for playing and learning. " +
				"You have apps that you use in your leisure time for staying informed about what happens in your city. You have apps that you use to keep in touch with your friends."+
				"Whenever you see an interesting app you want it and your instinct is just to download and install it. <br/><br/>" +
				"However for ensuring your safety and security it is best to"
			);
			$("#ch1").html("Make sure you do not incur hidden costs when downloading an app.");
			$("#ch2").html("Check that the app comes from a reputable source.");
			$("#ch3").html("Avoid having too many apps installed.");
			$("#ch4").parent().addClass("hidden");
		}
		else if (selectedQuiz == "quiz7") {
			$("#question").text("How do we protect ourselves from phishing?");
			$("#ch1").html("Do not click on links in emails from unknown sources.");
			$("#ch2").html("Install antivirus & antiphishing software and keep it up to date.");
			$("#ch3").html("Do not share password, financial or personal information over email.");
			$("#ch4").html("All of the above.");
		}
		
		$('#quiz').fadeOut();
		$('#loadbar').show();
		$('#closeBtn').show();
    	
    	setTimeout(function(){
        	$("#answer").html($(this).checking(selectedQuiz, choice));
        	$('#quiz').show();
        	$('#loadbar').fadeOut();
           /* something else */
    	}, 500);
    });
		
    $.fn.checking = function(quizID, choice) {
		
		if (quizID == "quiz1") {
			console.log("quiz1");
		 	var statistics = { choice1: 8, choice2: 2 };
			people = statistics.choice1 + statistics.choice2;

			switch(choice) {
				case "choice1": {
					var x = ((statistics.choice1+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					return 'You are right. About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice2": {
					var x = ((statistics.choice2+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					return 'Oops. Answer is TRUE. About ' + newValue*100 + '% of people has same answer as you.';
				}
				default: 
					return 'Pick your choice';
			}
		}
		else if (quizID == "quiz2") {
			console.log("quiz2");
		 	var statistics = { choice1: 4, choice2: 6 };
			people = statistics.choice1 + statistics.choice2;

			switch(choice) {
				case "choice1": {
					var x = ((statistics.choice1+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					return 'Oops. Answer is FALSE. About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice2": {
					var x = ((statistics.choice2+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					return 'You are right. About ' + newValue*100 + '% of people has same answer as you.';
				}
				default: 
					return 'Pick your choice';
			}
		}
		else if (quizID == "quiz3") {
			console.log("quiz3");
		 	var statistics = { choice1: 4, choice2: 6 };
			people = statistics.choice1 + statistics.choice2;

			switch(choice) {
				case "choice1": {
					var x = ((statistics.choice1+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					return 'Oops. Answer is Phishing. About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice2": {
					var x = ((statistics.choice2+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					return 'You are right. About ' + newValue*100 + '% of people has same answer as you.';
				}
				default: 
					return 'Pick your choice';
			}
		}
		else if (quizID == "quiz4") {
			console.log("quiz4");
		 	var statistics = { choice1: 4, choice2: 6, choice3: 2, choice4: 8 };
			people = statistics.choice1 + statistics.choice2 + statistics.choice3 + statistics.choice4;

			switch(choice) {
				case "choice1": {
					var x = ((statistics.choice1+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					return 'Oops. Answer is All of the above. About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice2": {
					var x = ((statistics.choice2+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					return 'Oops. Answer is All of the above. About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice3": {
					var x = ((statistics.choice3+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					return 'Oops. Answer is All of the above. About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice4": {
					var x = ((statistics.choice4+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					return 'You are right. About ' + newValue*100 + '% of people has same answer as you.';
				}
				default: 
					return 'Pick your choice';
			}
		}
		else if (quizID == "quiz5") {
			console.log("quiz5");
		 	var statistics = { choice1: 4, choice2: 6 };
			people = statistics.choice1 + statistics.choice2;

			switch(choice) {
				case "choice1": {
					var x = ((statistics.choice1+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					return 'You are right. About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice2": {
					var x = ((statistics.choice2+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					return 'Oops. Answer is TRUE. About ' + newValue*100 + '% of people has same answer as you.';
				}
				default: 
					return 'Pick your choice';
			}
		}
		else if (quizID == "quiz6") {
			console.log("quiz6");
		 	var statistics = { choice1: 4, choice2: 6, choice3: 2 };
			people = statistics.choice1 + statistics.choice2 + statistics.choice3;

			switch(choice) {
				case "choice1": {
					var x = ((statistics.choice1+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					return 'Oops. Answer is to get from reputable source. About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice2": {
					var x = ((statistics.choice2+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					return 'You are right. About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice3": {
					var x = ((statistics.choice3+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					return 'Oops. Answer is to get from reputable source. About ' + newValue*100 + '% of people has same answer as you.';
				}
				default: 
					return 'Pick your choice';
			}
		}
		else if (quizID == "quiz7") {
			console.log("quiz7");
		 	var statistics = { choice1: 2, choice2: 2, choice3: 2, choice4: 6 };
			people = statistics.choice1 + statistics.choice2 + statistics.choice3 + statistics.choice4;

			switch(choice) {
				case "choice1": {
					var x = ((statistics.choice1+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					return 'Oops. Answer is all of the above. About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice2": {
					var x = ((statistics.choice2+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					return 'Oops. Answer is all of the above. About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice3": {
					var x = ((statistics.choice3+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					return 'Oops. Answer is all of the above. About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice4": {
					var x = ((statistics.choice4+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					return 'You are right. About ' + newValue*100 + '% of people has same answer as you.';
				}
				default: 
					return 'Pick your choice';
			}
		}
    };

});