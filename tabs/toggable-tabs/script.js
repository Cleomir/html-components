window.onload = () => {
  const tabLinks = [...document.getElementsByClassName("tab-links")];
  tabLinks.forEach((element) => {
    element.addEventListener("click", (event) => {
      openTab(event, element.innerHTML);
    });
  });
};

const openTab = (event, tabName) => {
  const tabContent = [...document.getElementsByClassName("tab-content")];
  tabContent.forEach((element) => {
    element.style.display = "none";
  });

  const tabLinks = [...document.getElementsByClassName("tab-links")];

  tabLinks.forEach((element) => {
    element.className = element.className.replace(" active", "");
  });

  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
};
