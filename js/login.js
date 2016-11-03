// Login screen
$(document).ready(function() {
	
	var usr, pwd;
	
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
	  // Parse JSON string into object
	    var actual_JSON = JSON.parse(response);
			usr = actual_JSON['username'];
			pwd = actual_JSON['password'];
	 });
	
	// $.getJSON( "mock/test.json", { name: "John", time: "2pm" } )
// 	  .done(function( json ) {
// 	    console.log( "JSON Data: " + json.users[ 3 ].name );
// 	  })
// 	  .fail(function( jqxhr, textStatus, error ) {
// 	    var err = textStatus + ", " + error;
// 	    console.log( "Request Failed: " + err );
// 	});

	$("#btn-login").click(function() {
		var username = $("#login-username").val();
		var password = $("#login-password").val();
		
		// Checking for blank fields.
		if( username == usr && password == pwd ){
			alert("OK");
		} else {
			$("#login-alert").show( "slow" );
		}
	});
});