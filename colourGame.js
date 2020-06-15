
var numberOfCircles = 6;

var colours = colourGenerator (numberOfCircles); //argument 6 tells generate 6 colours

var circles = document.querySelectorAll(".circle");

var correctColour = colourRandomizer();

var colourDisplay = document.getElementById ("colourDisplay");

var alertMessage = document.querySelector("#alert");
colourDisplay.textContent = correctColour;

var bodyBackground = document.getElementsByTagName("body")[0];

var resetButton = document.querySelector("#reset");



var modeBtn = document.querySelectorAll (".modeButton");

for (var i = 0; i < modeBtn.length; i++) {
	modeBtn[i].addEventListener ("click", function () {
		modeBtn[0].classList.remove("selectedButton");
		modeBtn[1].classList.remove("selectedButton");
		this.classList.add("selectedButton");

		this.textContent === "Easy" ? numberOfCircles = 3: numberOfCircles = 6;
		reset();
		//how many Circles to show
		//pick new colors
		//pick a new correct Color
		//update page
	});
}

function reset() {
	colours = colourGenerator (numberOfCircles);
	//pick new random colours from array
 	correctColour = colourRandomizer();

 	//change colourDisplay to match picked Colour

 	colourDisplay.textContent = correctColour;
	//change colours of Circles

	for (var i = 0; i < circles.length; i++) {
		if (colours[i]) {
			circles[i].style.display = "block";
			circles[i].style.backgroundColor = colours[i];
		}
		else {
			circles[i].style.display = "none";
		}
		
	}

	alertMessage.textContent = ""
	bodyBackground.style.backgroundColor = "white";
	resetButton.textContent = "New Colours";
}

resetButton.addEventListener ("click", function() {
	reset();

});


var nextButton = document.getElementById ("playAgain");
var correctMessage = document.querySelector ("#correct");

var i = 0;

for( var i = 0; i < circles.length; i++) {
	//statement adds colors to Circles
	circles[i].style.backgroundColor = colours[i];

	//click listeners
	circles[i].addEventListener ("click", function() {
		//grab colour of selected Circle
		var clickedColour = this.style.backgroundColor;
		//compare colour to correctColour
		if (clickedColour === correctColour) {
			//body.style.backgroundColor = correctColour;
			alertMessage.textContent = "Correct!";
			
			nextButton.style.display = "block";
			correctMessage.style.display = "block";
			changeBackgroundColour (correctColour);
			bodyBackground.style.backgroundColor = correctColour;
		}
		else {
			this.style.backgroundColor = "white";
			alertMessage.textContent = "Try Again";
		}
	});
	
}



function nextGame() {
	colours = colourGenerator (numberOfCircles);
	//pick new random colours from array
 	correctColour = colourRandomizer();

 	//change colourDisplay to match picked Colour

 	colourDisplay.textContent = correctColour;
	//change colours of Circles

	for (var i = 0; i < circles.length; i++) {
		if (colours[i]) {
			circles[i].style.display = "block";
			circles[i].style.backgroundColor = colours[i];
		}
		else {
			circles[i].style.display = "none";
		}
		
	}

	correctMessage.style.display = "none";
	alertMessage.textContent = ""
	bodyBackground.style.backgroundColor = "white";
	nextButton.textContent = "New Colours";
	nextButton.style.display = "none";
}

nextButton.addEventListener ("click", function() {
	nextGame();

});

function changeBackgroundColour (colour) {
	//loop through all Circles
	var i = 0;

	while (i < colours.length) {
		circles[i].style.backgroundColor = colour;
		i++;
	}
	//change each colours to match given colour
}

function colourRandomizer () {
	var random = Math.floor(Math.random () * colours.length);
	return colours[random];
}

function colourGenerator (numberofColours) {
	//make an array
	var colourArray = []

	//repeat numofColours times
	for (var i = 0; i < numberofColours; i++) {
		//get random colour and push or unshift into array
		colourArray.unshift(randomColour());

	}
	//return array
	return colourArray;
}

function randomColour () {
	//pick a "red" from 0-255
	var red = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var green = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}