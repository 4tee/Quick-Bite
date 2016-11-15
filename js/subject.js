$(document).ready(function() {

	// side-loading of menu items
	$(function(){	
		$("#navbar").load("hbg_menu.html"); 
	});
	
	
	$('#fullpage').fullpage({
		verticalCentered: true,
		anchors: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th'],
		sectionsColor: ['#f5f5ff', '#f5f5f5', '#f5f5f5', '#f5f5f5', '#f5f5f5', '#f5f5f5', '#f5f5f5', '#f5f5f5', '#f5f5f5', '#f5f5f5', '#f5f5f5', '#f5f5f5', '#f5f5f5', '#f5f5ff'],
		navigation: true,
		navigationPosition: 'right'
	});
	
	$("#retPanel").click(function() {
		window.location.href = "./panel.html";
	});
	
 $(document).on("click", ".openModal", function() {
 	 $.fn.fullpage.setAllowScrolling(false);
 });
	
	
});