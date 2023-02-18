document.onkeydown = function (e) {
  if (e.key == "y" || e.key == "Y") {
    setTimeout(() => {
      document.location = "https://main.harderweb.dk/main.html";
    }, 3000);
  }
};
