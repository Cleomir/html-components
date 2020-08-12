const accordion = [...document.getElementsByClassName("accordion")];

accordion.forEach((element) => {
	element.addEventListener("click", () => {
		element.classList.toggle("active");

		const panel = element.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = `${panel.scrollHeight}px`;
		}
	});
});
