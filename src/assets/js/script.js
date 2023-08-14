(() => {
  document.getElementById("hamburger_menu").addEventListener("click", (e) => {
    e.target.classList.toggle("open");
    document
      .getElementsByTagName("body")[0]
      .classList.toggle("overflow-hidden");
    document.getElementById("overlay-bg").classList.toggle("min-h-screen");
    document.getElementById("list-categories").classList.toggle("hidden");
  });
})();
