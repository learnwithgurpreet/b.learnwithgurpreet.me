(() => {
  document.getElementById("hamburger_menu").addEventListener("click", (e) => {
    e.target.classList.toggle("open");
    document.getElementById("overlay-bg").classList.toggle("min-h-screen");
    document.getElementById("list-categories").classList.toggle("hidden");
  });
})();
