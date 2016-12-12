$(document).ready(function() {

	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	console.log("iOS" + iOS);
	
	if (iOS) $("#othersBtn").addClass("hidden");
	else $("#iosBtns").addClass("hidden");

	// side-loading of menu items
	$(function(){	
		$("#navbar").load("hbg_menu.html");
	
		var i = Locstor.get('selected_panel');
		switch (Locstor.get('items['+i+'].progress')) {
			case 10: $.fn.fullpage.moveTo(2); break;
			case 20: $.fn.fullpage.moveTo(4); break;
			case 50: $.fn.fullpage.moveTo(10); break;
			case 80: $.fn.fullpage.moveTo(17); break;
		}
	});


	$('#fullpage').fullpage({
		anchors: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
		'11th', '12th', '13th', '14th', 'scorecard', 'end'],
		verticalCentered: false,
		navigation: true,
		navigationPosition: 'right',
		menu: '#menu',
		onLeave: function(index, nextIndex, direction){
	    	//console.log("onLeave--" + "index: " + index + " nextIndex: " + nextIndex + " direction: " +  direction);
	    },
	    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
	    	//console.log("onSlideLeave--" + "anchorLink: " + anchorLink + " index: " + index + " slideIndex: " + slideIndex + " direction: " + direction);
	    },
	    afterRender: function(){
	    	//console.log("afterRender");
	    },
	    afterResize: function(){
	    	//console.log("afterResize");
	    },
	    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
	    	//console.log("afterSlideLoad--" + "anchorLink: " + anchorLink + " index: " + index + " slideAnchor: " + slideAnchor + " slideIndex: " + slideIndex);
	    },
	    afterLoad: function(anchorLink, index){
			//console.log("afterLoad--" + "anchorLink: " + anchorLink + " index: " + index + " scorecard: " + userScore);
			if (anchorLink == "scorecard") {
				$("#user-score").text(userScore);
			}
	    }
	});
				
				
	$("#retPanel").click(function() {
		window.location.href = "./panel.html";
	});
		
	$("#dailyTip").click(function() {
		$("#dailyTip").text('Registered');
		$("#dailyTip").removeClass('btn-primary');
		$("#dailyTip").prop('disabled', true);
		
		// Calling function to Android OS
		Android.receiveMsg("Tip of the day");
	});
	
	$("#weeklyTip").click(function() {
		$("#weeklyTip").text('Registered');
		$("#weeklyTip").removeClass('btn-primary');
		$("#weeklyTip").prop('disabled', true);
		
		// Calling function to Android OS
		Android.receiveMsg("Tip of the week");
	});
	
	$("#monthlyTip").click(function() {
		$("#monthlyTip").text('Registered');
		$("#monthlyTip").removeClass('btn-primary');
		$("#monthlyTip").prop('disabled', true);
		
		// Calling function to Android OS
		Android.receiveMsg("Tip of the month");
	});
	
	/* iOS functions */
    $('.disabled').click(function(e){
        e.preventDefault();
     })
	 
	$("#iOSDailyTip").click(function() {
		$("#iOSDailyTip").text('Registered');
		$("#iOSDailyTip").removeClass('btn-primary');
		$("#iOSDailyTip").addClass('btn-default');
		$("#iOSDailyTip").addClass('disabled');
		
	});
	
	$("#iOSWeeklyTip").click(function() {
		$("#iOSWeeklyTip").text('Registered');
		$("#iOSWeeklyTip").removeClass('btn-primary');
		$("#iOSWeeklyTip").addClass('btn-default');
		$("#iOSWeeklyTip").addClass('disabled');
		
	});
	
	$("#iOSMonthlyTip").click(function() {
		$("#iOSMonthlyTip").text('Registered');
		$("#iOSMonthlyTip").removeClass('btn-primary');
		$("#iOSMonthlyTip").addClass('btn-default');
		$("#iOSMonthlyTip").addClass('disabled');
		
	});
});