const modal = document.querySelector(".modal");

document.querySelector("#open-modal").addEventListener("click", () => {
  modal.style.display = "block";
});
document.querySelector(".cancel-btn").addEventListener("click", () => {
  modal.style.display = "none";
});
document.querySelector(".delete-btn").addEventListener("click", () => {
  window.alert("Account deleted");
  modal.style.display = "none";
});
document.querySelector(".close").addEventListener("click", () => {
  modal.style.display = "none";
});
