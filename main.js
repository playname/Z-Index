function show() {
	var b2 = document.getElementById("box2");

	document.getElementById("btn1").disabled = true;
	b2.style.zIndex = 1;
	
	b2.style.animation = "none";
	b2.style.animationDuration = "0.5s";
	b2.style.animationName = "openBox";

	setTimeout(function() {
		b2.style.animation = "";}, 500);
}

function hide() {
	var b2 = document.getElementById("box2");

	b2.style.animation = "none";
	b2.style.animationDirection = "reverse";
	b2.style.animationDuration = "0.5s";
	b2.style.animationName = "openBox";

	setTimeout(function() {
		b2.style.animation = "";
		b2.style.zIndex = -1;
		document.getElementById("btn1").disabled = false;
	}, 500);
}