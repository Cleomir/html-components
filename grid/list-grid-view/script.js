const columns = document.querySelectorAll(".column");
const buttons = document.querySelectorAll("button");

function setActiveButton(btn) {
  buttons.forEach((button) => {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
    }
  });
  btn.classList.add("active");
}

buttons[0].addEventListener("click", () => {
  setActiveButton(buttons[0]);
  columns.forEach((column) => (column.style.width = "100%"));
});
buttons[1].addEventListener("click", () => {
  setActiveButton(buttons[1]);
  columns.forEach((column) => (column.style.width = "50%"));
});
