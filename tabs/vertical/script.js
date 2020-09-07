const tabLinks = [...document.getElementsByClassName("tab-link")];

const openTab = (event, tabName) => {
  // hide all tabs and remove active class
  const tabContent = [...document.getElementsByClassName("tab-content")];
  tabContent.forEach((element) => {
    element.style.display = "none";
  });
  tabLinks.forEach((element) => {
    element.classList.remove("active");
  });

  // show clicked tab
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active");
};

tabLinks.forEach((element) => {
  element.addEventListener("click", (event) => {
    openTab(event, element.innerHTML);
  });
});
// show initial tab
tabLinks[0].click();
