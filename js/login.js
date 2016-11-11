// Login screen
$(document).ready(function() {
	
	var usr, pwd;
	
	/* mocking data from JSON file */
	function loadJSON(callback) {
		var xobj = new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
		xobj.open('GET', 'mock/login.json', true);
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
	    var actual_JSON = JSON.parse(response);
			usr = actual_JSON['username'];
			pwd = actual_JSON['password'];
	 });
	 
	/* Check if rememberMe has been ticked before */
	if (Locstor.get('rememberMe') == true) {
		$("#login-username:text").val(Locstor.get('username'));
		$("#login-password:password").val(Locstor.get('password'));
		$("#login-remember").prop('checked', true);
	}


	/* onClickListener for login button*/
	$("#btn-login").click(function() {
		var username = $("#login-username").val();
		var password = $("#login-password").val();
		
		var rememberMe = $("#login-remember").is(':checked');
		
		// Checking for blank fields.
		if( username == usr && password == pwd ){
			
			var creditials = {
				username: usr,
				password: pwd,
				rememberMe: rememberMe
			};
			Locstor.store(creditials);
			
			window.location.href = "./panel.html";
		} else {
			$("#login-alert").show( "slow" );
		}
	});
});