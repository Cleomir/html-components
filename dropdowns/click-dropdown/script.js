const onClick = () => {
  document.getElementById("myDropdown").classList.toggle("show");
};

window.onclick = (event) => {
  if (!event.target.matches(".dropbtn")) {
    const dropdowns = [...document.getElementsByClassName("dropdown-content")];

    dropdowns.forEach((element) => {
      if (element.classList.contains("show")) {
        element.classList.remove("show");
      }
    });
  }
};
