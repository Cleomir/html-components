const modal = document.querySelector(".modal");

// open modal
document
  .querySelector(".btn")
  .addEventListener("click", () => (modal.style.display = "block"));
// close modal
document
  .querySelector("span")
  .addEventListener("click", () => (modal.style.display = "none"));
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
