var isGrayScale = false;
let button = document.getElementById("grayscale-btn");
if(button){
	button.addEventListener("click", function(){
		isGrayScale =! isGrayScale;
		if(isGrayScale)
			button.innerHTML = "True Color";
		else
			button.innerHTML = "Gray Scale";
		toggleGrayScale();
	});
}

let toggleGrayScale = function(){
	var imgs = document.querySelectorAll(".img-thumbnail");
	if(imgs){
		imgs.forEach(function(img){
			img.classList.toggle("grayscale");
		});
	}
}