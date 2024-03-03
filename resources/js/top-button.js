document.addEventListener("DOMContentLoaded", function() {

const goTopButton = document.getElementById("top-button");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        goTopButton.style.display = "block";
      } else {
        goTopButton.style.display = "none";
      }
});

goTopButton.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
});