/*
JavaScript for Type Tester

Author: Joke De Winter Ltd
Author URI: https://www.jokedewinter.co.uk
Version: 1.0
*/


/* -------------------------------------------------------------
 * Choose weight
 * ------------------------------------------------------------- */

function chooseWeight() {
  	var chosenWeight = document.getElementById("selectWeight").value;
	document.getElementById("tryString").style.fontWeight = chosenWeight;
}



/* -------------------------------------------------------------
 * Choose style
 * ------------------------------------------------------------- */

function changeStyle() {
  	var chosenStyle = document.querySelector("input[name='selectStyle']:checked").value;
	document.getElementById("tryString").style.fontStyle = chosenStyle;
}



/* -------------------------------------------------------------
 * Choose size
 * ------------------------------------------------------------- */

function changeSize() {
    var chosenSize = document.getElementById("selectSize").value;
    document.getElementById("tryString").style.fontSize = chosenSize + "px";
    document.getElementById("sizeValue").innerHTML = chosenSize + " px";
}



/* -------------------------------------------------------------
 * Choose leading
 * ------------------------------------------------------------- */

function changeLeading() {
  	var chosenLeading = document.getElementById("selectLeading").value;
    var newLeading = chosenLeading / 10;
	document.getElementById("tryString").style.lineHeight = newLeading;
	document.getElementById("leadingValue").innerHTML = newLeading;
}



/* -------------------------------------------------------------
 * Choose tracking
 * ------------------------------------------------------------- */

function changeTracking() {
  	var chosenTracking = document.getElementById("selectTracking").value;
	document.getElementById("tryString").style.letterSpacing = chosenTracking + "px";
	document.getElementById("trackingValue").innerHTML = chosenTracking + " px";
}



/* -------------------------------------------------------------
 * Choose alignment
 * ------------------------------------------------------------- */

var chosenAlignment = document.getElementById("selectAlignment").getElementsByTagName("button");
for ( let i = 0; i < chosenAlignment.length; i++ ) {
    chosenAlignment[i].addEventListener("click", function() {            
        document.getElementById("tryString").style.textAlign = this.name;
    }, false);
} 



/* -------------------------------------------------------------
 * Choose theme
 * ------------------------------------------------------------- */

var reverseTheme = document.getElementById("reverseTheme");
var container = document.getElementById("try");
reverseTheme.onclick = function() { 
   container.classList.toggle("dark-mode");
}



/* -------------------------------------------------------------
 * Reset choices
 * ------------------------------------------------------------- */

var reset_btn = document.getElementById('try__reset'); 
reset_btn.onclick = function() { 
    
    var weight = 400;
    var style = "normal";
    var size = 72;
    var leading = 1.2;
    var tracking = 0;
    var alignment = "left";
    
	var element = document.getElementById("tryString");
	
    element.style.fontWeight = weight;
  	document.getElementById("selectWeight").value = weight;
    
	element.style.fontStyle = style;
  	document.getElementById("roman").checked = true;

    element.style.fontSize = size + "px";
    document.getElementById("sizeValue").value = size;
    document.getElementById("sizeValue").innerHTML = size + "px";
    
	element.style.lineHeight = leading;
	document.getElementById("leadingValue").value = leading;
	document.getElementById("leadingValue").innerHTML = leading;

    element.style.letterSpacing = tracking;
	document.getElementById("trackingValue").value = tracking;
	document.getElementById("trackingValue").innerHTML = tracking + "px";

    element.style.textAlign = alignment;
    
    var container = document.getElementById("try");
    container.setAttribute("class", "");
    
}
