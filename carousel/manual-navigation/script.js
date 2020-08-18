const dotButtons = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const slides = document.querySelectorAll(".slides");
// track current active slide
let slideIndex = 0;

prevButton.addEventListener("click", () => changeSlide(-1));
nextButton.addEventListener("click", () => changeSlide(1));
dotButtons.forEach((button, index) =>
  button.addEventListener("click", () => showSlides(index))
);

// prev/next button handler
const changeSlide = (index) => {
  showSlides((slideIndex += index));
};

const showSlides = (index) => {
  // handle slide index
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  // hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dotButtons[i].className = dotButtons[i].className.replace(" active", "");
  }

  // show current slide and set current dot button as active
  slides[slideIndex].style.display = "block";
  dotButtons[slideIndex].className += " active";
};

showSlides(slideIndex);
