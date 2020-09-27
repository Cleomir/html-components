const imageZoom = () => {
  const img = document.querySelector("img");
  const result = document.querySelector(".img-zoom-result");
  const lens = document.createElement("div");

  lens.setAttribute("class", "img-zoom-lens");
  img.parentElement.insertBefore(lens, img);

  const cx = result.offsetWidth / lens.offsetWidth;
  const cy = result.offsetHeight / lens.offsetHeight;
  result.style.backgroundImage = `url('${img.src}')`;
  result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;

  lens.addEventListener("mousemove", (event) => {
    moveLens(lens, img, cx, cy, result, event);
  });
  lens.addEventListener("touchmove", (event) => {
    moveLens(lens, img, cx, cy, result, event);
  });
  img.addEventListener("mousemove", (event) => {
    moveLens(lens, img, cx, cy, result, event);
  });
  img.addEventListener("touchmove", (event) => {
    moveLens(lens, img, cx, cy, result, event);
  });
};

const moveLens = (lens, img, cx, cy, result, event) => {
  event.preventDefault();

  const position = getCursorPosition(img, event);
  let x = position.x - lens.offsetWidth / 2;
  let y = position.y - lens.offsetHeight / 2;

  if (x > img.width - lens.offsetWidth) {
    x = img.width - lens.offsetWidth;
  }
  if (x < 0) {
    x = 0;
  }
  if (y > img.height - lens.offsetHeight) {
    y = img.height - lens.offsetHeight;
  }
  if (y < 0) {
    y = 0;
  }

  lens.style.left = `${x}px`;
  lens.style.top = `${y}px`;
  result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
};

const getCursorPosition = (img, event) => {
  event = event || window.event;
  const a = img.getBoundingClientRect();
  
  let x = event.pageX - a.left;
  let y = event.pageY - a.top;
  x -= window.pageXOffset;
  y -= window.pageYOffset;

  return { x, y };
};

window.addEventListener("load", imageZoom);
