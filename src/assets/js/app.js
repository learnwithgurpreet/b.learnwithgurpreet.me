(() => {
  window.addEventListener("load", function () {
    let html = document.querySelector("html");
    document
      .querySelector("#mode-toggle")
      .addEventListener("click", function (e) {
        e.preventDefault();
        html.classList.toggle("dark");
        localStorage.theme = localStorage?.theme === "dark" ? "light" : "dark";
      });
  });
})();
