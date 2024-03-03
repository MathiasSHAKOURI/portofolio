document.addEventListener("DOMContentLoaded", function() {

const goTopButton = document.getElementById("top-button");
let timeoutId;
goTopButton.style.opacity = "0";

window.addEventListener("scroll", () => {
  clearTimeout(timeoutId);
    if (window.scrollY > 10) {
        goTopButton.style.transition = "opacity 0.5s";
        goTopButton.style.display = "block";

        timeoutId = setTimeout(() => {
          goTopButton.style.opacity = "1";
        }, 500);
      } else {
          goTopButton.style.transition = "opacity 0.5s";

          timeoutId = setTimeout(() => {
            goTopButton.style.opacity = "0";
            setTimeout(() => {
              goTopButton.style.display = "none";
            }, 250);
          }, 500);
      }
});

goTopButton.onclick = () => {
    window.scrollTo({ top: 0});
  };
});