const button = document.querySelector("button");
const overlay = document.querySelector(".overlay");

button.addEventListener("click", () => {
  overlay.style.display = "block";
});
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});
