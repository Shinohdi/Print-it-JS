const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

let dotList = [];
let indexSlider = 0;
const parentDots = document.querySelector(".dots");

arrow_left.addEventListener("click", () => {
	changeSlider("left");
	
	//console.log(indexSlider);

});

arrow_right.addEventListener("click", () => {
	changeSlider("right");

	//console.log(indexSlider);


});


for(let i = 0; i < slides.length; i++){
	let newDot = document.createElement("div");
	newDot.classList.add("dot");

	if(i === 0){
		newDot.classList.add("dot_selected");	
	}

	parentDots.appendChild(newDot);
	dotList.push(newDot);
	console.log(dotList);
}

function changeSlider(directionString){
	let headerImg = document.querySelector(".banner-img");
	let tag = document.querySelector("#banner p");
	dotList[indexSlider].classList.remove("dot_selected");

	if(directionString === "left"){
		if(indexSlider === 0){
			indexSlider = slides.length -1;
		}
		else{
			indexSlider--;
		}
	}
	else if(directionString === "right"){
		if(indexSlider === slides.length -1){
			indexSlider = 0;
		}
		else{
			indexSlider++;
		}
	}

	headerImg.src = "./assets/images/slideshow/" + slides[indexSlider].image;
	let p = slides[indexSlider].tagLine;
	tag.innerHTML = p;
	dotList[indexSlider].classList.add("dot_selected");
}

