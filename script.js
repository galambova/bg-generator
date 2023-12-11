var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var currentColor;
var defaultColor1 = "#ff0000";
var defaultColor2 = "#ffff00";
var randomColorButton = document.getElementById("randomColor");
var randomColor1;
var randomColor2;


//Sets red and yellow color in the beginning, writes defaul colors rgba code
function startUp() {
	color1.value = defaultColor1;
	color2.value = defaultColor2;
	body.style.background = "linear-gradient(to right, "+ defaultColor1 + "," + defaultColor2 + ")"; 
	currentColor = document.getElementById("gradient").style.background;
	css.textContent = currentColor;
	
}

//fills linear gradient with color1 and color2 value. 
function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ","
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";"
}

//trigged by randomColor button, generates two random colors and set them as
//background colors + writes default colors codes 
var setRandomColor = () => {
	//generate color, save it into varriable, change the color, update text 
	 randomColor1 = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
	 randomColor2 = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
	color1.value = "#" + randomColor1;
	color2.value = "#" + randomColor2;
	setGradient();
	
}



startUp();


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomColorButton.addEventListener("click", setRandomColor);
//commented because we used oninput element in input. 
// <input oninput="setGradient()" class="color1" type="color" name="color1" value="#00ff00">
// <input oninput="setGradient()" class="color2" type="color" name="color2" value="#ff0000">
