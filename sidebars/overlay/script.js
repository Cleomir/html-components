const sideNav = document.querySelector("#side-nav");
const main = document.querySelector("#main");

document.querySelector("button").addEventListener("click", () => {
  sideNav.style.width = "250px";
  main.style.marginLeft = "250px";
});

document.querySelector(".close-btn").addEventListener("click", () => {
  sideNav.style.width = "0";
  main.style.marginLeft = "0";
});
