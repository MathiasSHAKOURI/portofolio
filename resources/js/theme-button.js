document.addEventListener("DOMContentLoaded", function() {

let isDarkTheme = true;
const bloc = document.querySelectorAll('.bloc, .bloc-main-1, .bloc-main-2, .bloc-main-3');
const body = document.querySelector("body");
const blocHover = document.querySelectorAll('.bloc');
const themeButton = document.getElementById("theme-button");
const themeIcon = document.querySelector("#theme-button i");
const goTopButton = document.getElementById("top-button");
const modalContent = this.documentElement.querySelector(".modal-content");

themeButton.addEventListener("click", () => {


  if (isDarkTheme === false){
    const svgIcon = document.querySelector('#theme-button svg');
    svgIcon.remove();
    themeIcon.remove();
    const newIconElement = document.createElement('i');
    newIconElement.className = 'fa-solid fa-circle-half-stroke me-2';
    newIconElement.style.color = "#1b1f23";
    themeButton.append(newIconElement);

    body.style.backgroundColor = "#0f0f0f";
    bloc.forEach(element => {
      element.style.backgroundColor = "#1b1f23"; 
    });
    blocHover.forEach(element => {
      element.classList.replace("bloc-hovered", "bloc-hover-dark");
    });

    goTopButton.style.color= "#fff";
    goTopButton.style.backgroundColor = "#1b1f23";
    goTopButton.style.borderColor = "#1b1f23";
    goTopButton.style.boxShadow = "2px 2px 10px 1px rgba(255, 255, 255, 0.3)";

    modalContent.style.backgroundColor = "#1b1f23"
    modalContent.style.borderColor = "#1b1f23";

    isDarkTheme = true;
    return;
  };

  if (isDarkTheme === true){
    const svgIcon = document.querySelector('#theme-button svg');
    svgIcon.remove();
    themeIcon.remove();
    const newIconElement = document.createElement('i');
    newIconElement.className = 'fa-solid fa-moon me-2';
    newIconElement.style.color = "#969696";
    themeButton.append(newIconElement);

    body.style.backgroundColor = "#f8f2f9";
    bloc.forEach(element => {
      element.style.backgroundColor = "#969696";
    });
    blocHover.forEach(element => {
        element.classList.replace("bloc-hover-dark", "bloc-hovered");
    });

    goTopButton.style.color= "#969696";
    goTopButton.style.backgroundColor = "#969696";
    goTopButton.style.borderColor = "#969696";
    goTopButton.style.boxShadow = "2px 2px 10px 1px rgba(15, 15, 15, 0.3)";

    modalContent.style.backgroundColor = "#969696"
    modalContent.style.borderColor = "#969696";

    isDarkTheme = false;
  };
});

});