//panel screen
var panelScript = {};
$(document).ready(function() {

	// side-loading of menu items
	$(function(){	
		$("#navbar").load("hbg_menu.html"); 
	});
	
	/* mocking data from JSON file */
	function loadJSON(callback) {
		var xobj = new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
		xobj.open('GET', 'mock/items.json', true);
		xobj.onreadystatechange = function () {
			if (xobj.readyState == 4 && xobj.status == "200") {
				// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
				callback(xobj.responseText);
			}
		};
		xobj.send(null);
	}
	 
	loadJSON(function(response) {
		
		console.log('response: ' + response);
	  	// Parse JSON string into object	
			var items = JSON.parse(response).items;
						
			if (Locstor.get('items') != null) {
				Locstor.set('items', items.length);
			
				for (var i=0; i<items.length; i++) {
					Locstor.set('items['+i+'].title', items[i].title);
					Locstor.set('items['+i+'].progress', items[i].progress);
					Locstor.set('items['+i+'].text', items[i].text);
					Locstor.set('items['+i+'].feedback', items[i].feedback);
					Locstor.set('items['+i+'].choice', items[i].choice);
					Locstor.set('items['+i+'].statistics.useful', items[i].statistics[0].useful);
					Locstor.set('items['+i+'].statistics.somewhat_useful', items[i].statistics[0].somewhat_useful);
					Locstor.set('items['+i+'].statistics.somewhat_useless', items[i].statistics[0].somewhat_useless);
					Locstor.set('items['+i+'].statistics.useless', items[i].statistics[0].useless);
				}
			}
			
			//createPanels();
			panelScript.create();
	 });
	 
	 
	 $(document).on("click", ".openModal", function() {
	 	 var id = $(this).data('id');
		 console.log('id:' + id);
		 if (id == 0) window.location.href = "./cybersec101.html"
	 });
	 
	 /* Styling and Customizing of Panel Footer in HTML */
	 function makePanelFooterHtml(index, progress, feedback, choice, statistics) {
		 if (feedback) {
			 // feedback already done
			 var footerText;
			 people = statistics.useful + statistics.somewhat_useful + statistics.somewhat_useless + statistics.useless;
			 
			 //if it is already feedback; pull the statistics value based on choice; 0-indexed
			 switch (choice) {
				 	case 0: footerText = (statistics.useful/people * 100).toFixed(2) + '% people find it useful.'; break;
			 		case 1: footerText = (statistics.somewhat_useful/people * 100).toFixed(2) + '% people find it somewhat useful.'; break;
					case 2: footerText = (statistics.somewhat_useless/people * 100).toFixed(2) + '% people find it somewhat useless.'; break;
					case 3: footerText = (statistics.useful/people * 100).toFixed(2) + '% people find it useless.'; break;
			 }
			 
			 var footerHtml =
			 	'<div class="panel-footer panel-custom">' +
			 		'<div class="input-group">' +
		 				'<i class="glyphicon glyphicon-comment" style="margin-right:5px;" ></i>' +
		 				footerText +
			 		'</div>' +
			 	'</div>';
			
			return footerHtml;
				
		 } else {
		 		// no feedback yet
			 var footerText;
			 switch (progress) {
				 case 0: footerText = 'Begin'; break;
				 case 100: footerText =  'Give feedback'; break;
				 default: footerText = 'Continue'; 
			 }
			
			 // Popup modal only when it is ready for feedback
			 if (progress != 100) {
	 				footerHtml = 
	 			 	'<div class="panel-footer">' +
	 		 			'<div class="openModal input-group" data-id="' + index + '">' +
	 		 				'<i class="glyphicon glyphicon-circle-arrow-right" style="margin-right:5px;" ></i>' +
	 		 				footerText +
	 					'</div>' +
	 			 	'</div>';
			 } else {
				 
				 // set selected panel; it will then be handled at popup.js
				 Locstor.set('selected_panel', index);
	 				footerHtml = 
	 			 	'<div class="panel-footer">' +
	 		 			'<div class="openModal input-group" data-id="' + index + '" data-toggle="modal" data-target="#popup">' +
	 		 				'<i class="glyphicon glyphicon-circle-arrow-right" style="margin-right:5px;" ></i>' +
	 		 				footerText +
	 					'</div>' +
	 			 	'</div>';
			 }
					
				return footerHtml;
		 }
	 }
	 
	 
	 /* Build HTML panel code with the parameters given */
	 function buildOnePanel(index, title, progress, text, feedback, choice, statistics) {
		 
		 var footerHtml = makePanelFooterHtml(index, progress, feedback, choice, statistics);
		 var htmlCode = 
		 	'<div class="panel panel-info">' +
		 		'<div class="panel-heading">' +
		 			'<div class="panel-title">' + title + '</div>' +
				'</div>' +
		 		'<div class="panel-body" >' +
		 			'<div class="progress">' +
		 				'<div class="progress-bar progress-bar-success" style="width: '+ progress +'%">' + progress + '%' +
		 					'<span class="sr-only">' + progress + '%</span>' +
		 				'</div>' +
		 				'<div class="progress-bar progress-bar-empty" style="width: ' + (100-progress) + '%">' + (100-progress) + '%' +
		 					'<span class="sr-only">' + (100-progress) + '%</span>' +
		 				'</div>' +
		 			'</div>' +
		 			'<div id="text">' +
		 				text +
		 			'</div>' +
		 		'</div>' +		 		
		 		footerHtml +
		 	'</div>';
		
			return htmlCode;
	 }
	 
	 
	 
	 /* create html panel dynamically */
	 
	 panelScript.create = function createPanels() {
		 
		 var panels = '';
		 var storedItems = Locstor.get('items');
		 for (var i=0; i<storedItems; i++) {
			 var title = Locstor.get('items['+i+'].title');
			 var progress = Locstor.get('items['+i+'].progress');
			 var text = Locstor.get('items['+i+'].text');
			 var feedback = Locstor.get('items['+i+'].feedback');
			 var choice = Locstor.get('items['+i+'].choice');
			 
			 var statistics = {
				 useful: Locstor.get('items['+i+'].statistics.useful'),
				 somewhat_useful: Locstor.get('items['+i+'].statistics.somewhat_useful'),
				 somewhat_useless: Locstor.get('items['+i+'].statistics.somewhat_useless'),
				 useless: Locstor.get('items['+i+'].statistics.useless')
			 };
			 
			 panels += buildOnePanel(i, title, progress, text, feedback, choice, statistics);
		 }
		 
		 document.getElementById("contentbox").innerHTML = panels;
	 	
	 }
	 
});