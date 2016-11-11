$(function(){


		    var loading = $('#loadbar').hide();
		    $(document)
		    .ajaxStart(function () {
		        loading.show();
		    }).ajaxStop(function () {
		    	loading.hide();
		    });
				
				$("#closeBtn").on('click', function() {
					panelScript.create();
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
					
					var i = Locstor.get('selected_panel');
					console.log('selected panel: ' + i);
					
	 			 	var statistics = {
	 				 useful: Locstor.get('items['+i+'].statistics.useful'),
	 				 somewhat_useful: Locstor.get('items['+i+'].statistics.somewhat_useful'),
	 				 somewhat_useless: Locstor.get('items['+i+'].statistics.somewhat_useless'),
	 				 useless: Locstor.get('items['+i+'].statistics.useless')
	 			 	};
					console.log(statistics);
					
					people = statistics.useful + statistics.somewhat_useful + statistics.somewhat_useless + statistics.useless;
					
					switch(ck) {
						case "1": {
							var x = (statistics.useful+1) / (people+1);
							var newValue = (Math.round(100*x)/100).toFixed(2);
							Locstor.set('items['+i+'].statistics.useful', statistics.useful+1);
							Locstor.set('items['+i+'].feedback', true);
							Locstor.set('items['+i+'].choice', 0);
							return 'Great. You find it useful. So does ' + newValue*100 + '% of responses.';
						}
						case "2": {
							var x = ((statistics.somewhat_useful+1) / (people+1)).toFixed(2);
							var newValue = (Math.round(100*x)/100).toFixed(2);
							Locstor.set('items['+i+'].statistics.somewhat_useful', statistics.somewhat_useful+1);
							Locstor.set('items['+i+'].feedback', true);
							Locstor.set('items['+i+'].choice', 1);
							return 'Good. You find it somewhat useful. So does ' + newValue*100 + '% of responses.';
						}
						case "3": {
							var x = ((statistics.somewhat_useless+1) / (people+1)).toFixed(2);
							var newValue = (Math.round(100*x)/100).toFixed(2);
							Locstor.set('items['+i+'].statistics.somewhat_useless', statistics.somewhat_useless+1);
							Locstor.set('items['+i+'].feedback', true);
							Locstor.set('items['+i+'].choice', 2);
							return 'Ok. You find it somewhat useless. So does ' + newValue*100 + '% of responeses.';
						}
						case "4": {
							var x = ((statistics.useless+1) / (people+1)).toFixed(2);
							var newValue = (Math.round(100*x)/100).toFixed(2);
							Locstor.set('items['+i+'].statistics.useless', statistics.useless+1);
							Locstor.set('items['+i+'].feedback', true);
							Locstor.set('items['+i+'].choice', 3);
							return 'I see. You find it useless. So does ' + newValue*100 + '% of responeses.';
						}
						default: 
							return 'You have not given any feedback yet.';
					}
		    };

});