const dotButtons = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".slides");
// track current active slide
let slideIndex = 0;

const showSlides = () => {
  // handle slide index
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = slideIndex;
  }

  // hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dotButtons[i].className = dotButtons[i].className.replace(" active", "");
  }

  // show current slide and set current dot button as active
  slides[slideIndex].style.display = "block";
  dotButtons[slideIndex].className += " active";
  slideIndex++;
  setTimeout(showSlides, 2000);
};

showSlides();
