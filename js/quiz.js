$(function(){
	
	$(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
    	loading.hide();
    });
	
	
	$.fn.toggle = function(quizID) {
		$(quizID).removeAttr('data-toggle');
		$(quizID).removeClass("btn-danger");
		$(quizID).addClass("disabled");
		$(quizID).addClass("btn-default");
	}
	
	$.fn.calculateScore = function() {
		
		
		if (ansForQuiz["quiz1"]) $(this).toggle('#quiz1');
		if (ansForQuiz["quiz2"]) $(this).toggle('#quiz2');
		if (ansForQuiz["quiz3"]) $(this).toggle('#quiz3');
		if (ansForQuiz["quiz4"]) $(this).toggle('#quiz4');
		if (ansForQuiz["quiz5"]) $(this).toggle('#quiz5');
		if (ansForQuiz["quiz6"]) $(this).toggle('#quiz6');
		if (ansForQuiz["quiz7"]) $(this).toggle('#quiz7');
	}
	
	$('.modal').on('shown.bs.modal', function() {
		console.log('modal open');
		$.fn.fullpage.setAllowScrolling(false);
	});
	
	$('.modal').on('hidden.bs.modal', function () {
		console.log('modal close');
		$.fn.fullpage.setAllowScrolling(true);
		console.log('modal close: userScore: ' + userScore);
		$(this).calculateScore();
	});
	
	$("#nextBtn").on('click', function() {
		console.log('nextBtn: ' + selectedQuiz);
		
		if (selectedQuiz == "quiz1") {
			selectedQuiz = "quiz2";
		}
		else if (selectedQuiz == "quiz2") {
			selectedQuiz = "quiz3";
		}
		else if (selectedQuiz == "quiz5") {
			selectedQuiz = "quiz6";
		}
		else if (selectedQuiz == "quiz6") {
			selectedQuiz = "quiz7";
		}
		
		shownOnce = false;
		$("#quizImg").remove(); // remove the image
		$("#question-info").remove();
		$("#ch1").parent().removeClass("hidden");
		$("#ch2").parent().removeClass("hidden");
		$("#ch3").parent().removeClass("hidden");
		$("#ch4").parent().removeClass("hidden");
		
		$(this).buildQuiz();
	});

	$(".quizBtn").on('click',function () {
		
		if (this.id != "") selectedQuiz = this.id;
		
		shownOnce = false;
		$("#quizImg").remove(); // remove the image
		$("#question-info").remove();
		$("#ch1").parent().removeClass("hidden");
		$("#ch2").parent().removeClass("hidden");
		$("#ch3").parent().removeClass("hidden");
		$("#ch4").parent().removeClass("hidden");
	});
	

	$.fn.buildQuiz = function() {
		
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
		// else if (selectedQuiz == "quiz3") {
		// 	$("#question").text("Is this a legitimate email?");
		// 	$("#ch1").html("Legitimate");
		// 	$("#ch2").html("Phishing");
		// 	$("#ch3").parent().addClass("hidden");
		// 	$("#ch4").parent().addClass("hidden");
		//
		// 	if (!shownOnce) {
		// 		$(".modal-header").append("<img id='quizImg' class='img-responsive' src='img/awareness_q3.png' alt='awareness' width='460' height='345'>");
		// 		shownOnce = true;
		// 	}
		// }
		else if (selectedQuiz == "quiz3") {
			$("#question").text("What do we look for in a Phishing email?");
			$("#ch1").html("Spelling and grammar mistakes");
			$("#ch2").html("Offers that are too good to be true");
			$("#ch3").html("Attachments e.g. a zip file");
			$("#ch4").html("All of the above");
			
			if (!shownOnce) {
				// $(".modal-header").append("<img id='quizImg' class='img-responsive' src='img/awareness_q3.png' alt='awareness' width='460' height='345'>");
				shownOnce = true;
			}
		}
		else if (selectedQuiz == "quiz4") {
			$("#question").text("What would you do if you suspect that an email you received is a phishing attempt?");
			$("#ch1").html("Report it");
			$("#ch2").html("Follow company's standard operating procedures and act on it");
			$("#ch3").html("Do not click links that appear in the message");
			$("#ch4").html("All of the above");
			
			if (!shownOnce) {
				// $(".modal-header").append("<div id='question-info'>"+
// 				"<p>Hello!<br/>As part of our security measures, we regularly screen activity in the Facebook system."+
// 				"We recently contacted you after noticing an issue on your account.<br/>Our system detected your unusual Copyrights activity " +
// 				"linked to your Facebook account, please follow the link below to fill the Copyright Law form:</p>"+
// 				"<a href='http://www.facebook.com/application_form'>Application Form</a>" +
// 				"<p>Note: If you don’t fill the application your account will be permanently blocked.</p>"+
// 				"<p>Regards,<br/>Facebook Copyrights Departement"+
// 				"</div>");
				shownOnce = true;
			}
		}
		// else if (selectedQuiz == "quiz5") {
		// 	$("#question").text("The best way to identify a phishing email is by checking the sender's email address.");
		// 	$("#ch1").html("True");
		// 	$("#ch2").html("False");
		// 	$("#ch3").parent().addClass("hidden");
		// 	$("#ch4").parent().addClass("hidden");
		// }
		else if (selectedQuiz == "quiz5") {
			$("#question").text("In order to protect ourselves from phishing attack, it is best");
			$("#ch1").html("to provide detailed information of our service staff on facebook");
			$("#ch2").html("not to publish too much personal information on facebook");
			$("#ch3").parent().addClass("hidden");
			$("#ch4").parent().addClass("hidden");
		}
		else if (selectedQuiz == "quiz6") {
			$("#question").text(
				"You are about to download and install an app. " +
				"However, for ensuring your safety and security, it is best to"
			);
			$("#ch1").html("Make sure you do not incur hidden costs when downloading an app.");
			$("#ch2").html("Check that the app comes from a reputable source.");
			$("#ch3").html("Avoid having too many apps installed.");
			$("#ch4").parent().addClass("hidden");
		}
		else if (selectedQuiz == "quiz7") {
			$("#question").text("How do we protect ourselves from phishing?");
			$("#ch1").html("Do not click on links from unknown sources.");
			$("#ch2").html("Install antivirus & antiphishing software.");
			$("#ch3").html("Do not share sensitive information over email.");
			$("#ch4").html("All of the above.");
		}
	}
	
	$(".btn").on('click',function () {
		
    	var choice = $(this).find('input:radio').val();
		console.log('choice:' + choice + "; selectedQuiz:" + selectedQuiz);
		// Toggle the CLOSE or NEXT button
		if (choice != null) {
			if (selectedQuiz == 'quiz3' || selectedQuiz == 'quiz4' || selectedQuiz == 'quiz7') {
				$("#closeBtn").removeClass("hidden");
				$("#nextBtn").addClass("hidden");
			} else {
				$("#closeBtn").addClass("hidden");
				$("#nextBtn").removeClass("hidden");
			}
		} else {
			$("#closeBtn").addClass("hidden");
			$("#nextBtn").addClass("hidden");
		}
		
		$(this).buildQuiz();
		
		$('#quiz').fadeOut();
		$('#loadbar').show();
		$('#closeBtn').show();
    	
    	setTimeout(function(){
			var text = $(this).checking(selectedQuiz, choice);
        	$("#answer").html(text);
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
					if (!ansForQuiz[quizID]) userScore++;
					ansForQuiz["quiz1"] = true;
					
					
					return 'You are right.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice2": {
					var x = ((statistics.choice2+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					ansForQuiz["quiz1"] = true;
					
					
					return 'Oops. Answer is TRUE.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				}
				default: 
					return '';
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
					ansForQuiz["quiz2"] = true;
					
					return 'Oops. Answer is FALSE.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice2": {
					var x = ((statistics.choice2+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					if (!ansForQuiz[quizID]) userScore++;
					ansForQuiz["quiz2"] = true;
					
					return 'You are right.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				}
				default: 
					return '';
			}
		}
		else if (quizID == "quiz3") {
			console.log("quiz3");
		 	var statistics = { choice1: 4, choice2: 6, choice3: 2, choice4: 8 };
			people = statistics.choice1 + statistics.choice2 +statistics.choice3 + statistics.choice4;

			switch(choice) {
				case "choice1": {
					var x = ((statistics.choice1+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					ansForQuiz["quiz3"] = true;
					return 'Oops. Answer is All of the above.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice2": {
					var x = ((statistics.choice2+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					ansForQuiz["quiz3"] = true;
					return 'Oops. Answer is All of the above.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice3": {
					var x = ((statistics.choice3+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					ansForQuiz["quiz3"] = true;
					return 'Oops. Answer is All of the above.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice4": {
					var x = ((statistics.choice4+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					if (!ansForQuiz[quizID]) userScore++;
					ansForQuiz["quiz3"] = true;
					return 'You are right.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				}
				default: 
					return '';
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
					ansForQuiz["quiz4"] = true;
					return 'Oops. Answer is All of the above.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice2": {
					var x = ((statistics.choice2+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					ansForQuiz["quiz4"] = true;
					return 'Oops. Answer is All of the above.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice3": {
					var x = ((statistics.choice3+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					ansForQuiz["quiz4"] = true;
					return 'Oops. Answer is All of the above.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice4": {
					var x = ((statistics.choice4+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					console.log('userScore: ' + userScore);
					if (!ansForQuiz[quizID]) userScore++;
					console.log('userScore: ' + userScore);
					ansForQuiz["quiz4"] = true;
					return 'You are right.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				}
				default: 
					return '';
			}
		}
		else if (quizID == "quiz5") {
			console.log("quiz5");
		 	var statistics = { choice1: 4, choice2: 6 };
			people = statistics.choice1 + statistics.choice2;

			switch(choice) {
				case "choice1": {
					var x = ((statistics.choice2+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					ansForQuiz["quiz5"] = true;
					return 'Oops. Answer is TRUE.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice2": {
					var x = ((statistics.choice1+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					if (!ansForQuiz[quizID]) userScore++;
					ansForQuiz["quiz5"] = true;
					return 'You are right.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				}
				// case "choice2": {
				// 	var x = ((statistics.choice2+1) / (people+1)).toFixed(2);
				// 	var newValue = (Math.round(100*x)/100).toFixed(2);
				// 	ansForQuiz["quiz5"] = true;
				// 	return 'Oops. Answer is TRUE.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				// }
				default: 
					return '';
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
					ansForQuiz["quiz6"] = true;
					return 'Oops. Answer is to get from reputable source.';//' About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice2": {
					var x = ((statistics.choice2+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					if (!ansForQuiz[quizID]) userScore++;
					ansForQuiz["quiz6"] = true;
					return 'You are right.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice3": {
					var x = ((statistics.choice3+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					ansForQuiz["quiz6"] = true;
					return 'Oops. Answer is to get from reputable source.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				}
				default: 
					return '';
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
					ansForQuiz["quiz7"] = true;
					return 'Oops. Answer is all of the above.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice2": {
					var x = ((statistics.choice2+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					ansForQuiz["quiz7"] = true;
					return 'Oops. Answer is all of the above.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice3": {
					var x = ((statistics.choice3+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					ansForQuiz["quiz7"] = true;
					return 'Oops. Answer is all of the above.'; //' About ' + newValue*100 + '% of people has same answer as you.';
				}
				case "choice4": {
					var x = ((statistics.choice4+1) / (people+1)).toFixed(2);
					var newValue = (Math.round(100*x)/100).toFixed(2);
					if (!ansForQuiz[quizID]) userScore++;
					ansForQuiz["quiz7"] = true;
					return 'You are right.';//' About ' + newValue*100 + '% of people has same answer as you.';
				}
				default: 
					return '';
			}
		}
    };

});