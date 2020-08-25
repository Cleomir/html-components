const progressBar = document.querySelector(".progress-bar");
let progressBarRunning = false;

document.querySelector("button").addEventListener("click", () => {
  if (!progressBarRunning) {
    progressBarRunning = true;
    let width = 1;
    const frame = () => {
      if (width >= 100) {
        clearInterval(clearId);
        progressBarRunning = false;
      } else {
        width++;
        progressBar.style.width = `${width}%`;
        progressBar.innerHTML = `${width}%`;
      }
    };
    const clearId = setInterval(frame, 10);
  }
});
