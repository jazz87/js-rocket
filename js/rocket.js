var timer = null;
var countdownNumber = 10;


//Set the first state
var changeState = function (state) {
	document.body.className = 'body-state'+ state;
	clearInterval(timer);
	// Countdown function
	if (state == 2) {
		timer = setInterval(function () {
			document.getElementById('countdown').innerHTML = countdownNumber;
			countdownNumber = countdownNumber-1;
			// When zero hits, go to state 3
			if (countdownNumber <= 0){
				
				changeState(3);
			};
		}, 1000);
	} else if (state == 3) {

	};
}