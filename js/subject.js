$(document).ready(function() {

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
		verticalCentered: false,
		anchors: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', 
		'11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', 
		'21st', '22nd', '23rd', '24th'],
		navigationTooltips: [
			'', '', '', '', '', '', '', '', '', '', 
			'', '', '', '', '', '', '', '','', '',
			'', '', '', ''],
		navigation: true,
		showActiveTooltip: true,
		navigationPosition: 'right',
		css3: true
	});

	$("#retPanel").click(function() {
		window.location.href = "./panel.html";
	});
		
	$("#iamIn").click(function() {
		$("#iamIn").text('Registered');
		$("#iamIn").removeClass('btn-success');
		$("#iamIn").prop('disabled', true);
		
		// Calling function to Android OS
		Android.receiveMsg("Do not write down your password.");
		
	});
	
	 $(document).on("click", ".openModal", function() {
	 	 $.fn.fullpage.setAllowScrolling(false);
	 });
});