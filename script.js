/* Array of images and texts
var images = ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg","6.jpg"];
var texts = ["If you think you are too small to make a difference, try sleeping with a mosquito.", 
"In order to succeed we must first believe that we can.",
"The happiest people don't have the best of everything, They just make the best of everything.", 
"All things are difficult before they are easy.",
"When nothing is going right, go left.",
"Go confidently in the direction of your dreams. Live the life you have imagined."];

// Current image and text index
var currentIndex = 0;

// Function to change image and text
function changeImageAndText() {
	var slider = document.getElementById("slider");
	slider.innerHTML = "";
	var img = document.createElement("img");
	img.src = images[currentIndex];
	img.alt = "Image " + (currentIndex+1);
	var p = document.createElement("p");
	p.innerText = texts[currentIndex];
	slider.appendChild(img);
	slider.appendChild(p);
}

// Event listener for arrow keys
document.addEventListener("keydown", function(event) {
	if (event.keyCode == 37) { // Left arrow key
		currentIndex--;
		if (currentIndex < 0) {
			currentIndex = images.length - 1;
		}
		changeImageAndText();
	} else if (event.keyCode == 39) { // Right arrow key
		currentIndex++;
		if (currentIndex >= images.length) {
			currentIndex = 0;
		}
		changeImageAndText();
	}
});

// Initial image and text
//changeImageAndText();

var currentSlide = 0;
var slides = document.querySelectorAll('.slides img');
function showSlide(n) {
  currentSlide = (n + slides.length) % slides.length;
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[currentSlide].classList.add('active');
}
showSlide(currentSlide);
document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowLeft') {
    showSlide(currentSlide - 1);
  } else if (event.code == 'ArrowRight') {
    showSlide(currentSlide + 1);
  }
});
*/

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}