var timer = null;
var countdownNumber = 10;


//Set the first state
var changeState = function (state) {
	document.body.className = 'body-state'+ state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;

	// Countdown function
	if (state == 2) {
		timer = setInterval(function () {
			countdownNumber = countdownNumber-1;
			document.getElementById('countdown').innerHTML = countdownNumber;
			if (countdownNumber <= 0){
				changeState(3);
			};
		}, 500);
	// When zero hits, go to state 3
	} else if (state == 3) {
		var succes = setTimeout(function () 
		{
				var randomNumber = Math.round(Math.random()*10);

				console.log('randomNumber:',randomNumber)

				// succes
				if (randomNumber > 5) {
					changeState(4);
				// oh no message	
				} else {
					changeState(5);
				}	
		}, 2000);
	};
}