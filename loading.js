if (screen.width < 700) {
  window.addEventListener("click", () => {
    document.location = "https://mobile.harderweb.dk/";
  });
} else {
  window.addEventListener("keyup", () => {
    document.location = "https://main.harderweb.dk/main.html";
  });
}
