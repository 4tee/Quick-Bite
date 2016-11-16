$(function(){


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

		    $(".btn").on('click',function () {
		    	var choice = $(this).find('input:radio').val();
		    	
					$('#quiz').fadeOut();
					$('#loadbar').show();
					$('#closeBtn').show();
		    	
		    	setTimeout(function(){
		        $("#answer").html($(this).checking(choice));
		        $('#quiz').show();
		        $('#loadbar').fadeOut();
		           /* something else */
		    	}, 500);
		    });
				
		    $.fn.checking = function(ck) {
										
	 			 	var statistics = {
	 				 choice1: 2,
	 				 choice2: 0,
	 				 choice3: 8,
	 				 choice4: 0
	 			 	};
					
					people = statistics.choice1 + statistics.choice2 + statistics.choice3 + statistics.choice4;

					switch(ck) {
						case "2013": {
							var x = (statistics.choice1+1) / (people+1);
							var newValue = (Math.round(100*x)/100).toFixed(2);
							return 'Oops. This initiative was launched by Prime Minister Lee Hsien Loong in 24 Nov 2014. About ' + newValue*100 + '% of people has same answer as you.';
						}
						case "2020": {
							var x = ((statistics.choice2+1) / (people+1)).toFixed(2);
							var newValue = (Math.round(100*x)/100).toFixed(2);
							return 'Oops. This initiative was launched by Prime Minister Lee Hsien Loong in 24 Nov 2014. About ' + newValue*100 + '% of people has same answer as you.';
						}
						case "2014": {
							var x = ((statistics.choice3+1) / (people+1)).toFixed(2);
							var newValue = (Math.round(100*x)/100).toFixed(2);
							return 'Great. This initiative was launched by Prime Minister Lee Hsien Loong in 24 Nov 2014. About ' + newValue*100 + '% of people has same answer as you.';
						}
						case "2017": {
							var x = ((statistics.choice4+1) / (people+1)).toFixed(2);
							var newValue = (Math.round(100*x)/100).toFixed(2);
							return 'Oops. This initiative was launched by Prime Minister Lee Hsien Loong in 24 Nov 2014. About ' + newValue*100 + '% of people has same answer as you.';
						}
						default: 
							return 'Pick your choice';
					}
		    };

});