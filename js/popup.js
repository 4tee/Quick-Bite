$(function(){

		    var loading = $('#loadbar').hide();
		    $(document)
		    .ajaxStart(function () {
		        loading.show();
		    }).ajaxStop(function () {
		    	loading.hide();
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
					
					switch(ck) {
						case "1": return 'Great. You find it useful. So does 60% of responses.';
						case "2": return 'Good. You find it somewhat useful. So does 20% of responses.';
						case "3": return 'Ok. You find it somewhat useless. So does 15% of responeses.';
						case "4": return 'I see. You find it useless. So does 5% of responeses.';
						default: 
							return 'You have not given any feedback yet.';
					}
		    };

});