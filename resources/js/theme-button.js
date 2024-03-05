document.addEventListener("DOMContentLoaded", function() {

let isDarkTheme = true;
const bloc = document.querySelectorAll('.bloc, .bloc-main-1, .bloc-main-2, .bloc-main-3');
const body = document.querySelector("body");
const blocHover = document.querySelectorAll('.bloc');
const themeButton = document.getElementById("theme-button");
const themeIcon = document.querySelector("#theme-button i");
const goTopButton = document.getElementById("top-button");
const modalContent = this.documentElement.querySelector(".modal-content");
const footer = document.querySelector("footer div p");
console.log(footer);


themeButton.addEventListener("click", () => {


  if (isDarkTheme === false){
    const colorDark = "#1b1f23";
    const svgIcon = document.querySelector('#theme-button svg');
    svgIcon.remove();
    themeIcon.remove();
    const newIconElement = document.createElement('i');
    newIconElement.className = 'fa-solid fa-circle-half-stroke me-2';
    newIconElement.style.color = colorDark;
    themeButton.append(newIconElement);

    body.style.backgroundColor = "#0f0f0f";
    bloc.forEach(element => {
      element.style.backgroundColor = colorDark; 
    });
    blocHover.forEach(element => {
      element.classList.replace("bloc-hovered", "bloc-hover-dark");
    });

    goTopButton.style.color= "#fff";
    goTopButton.style.backgroundColor = colorDark;
    goTopButton.style.borderColor = colorDark;
    goTopButton.style.boxShadow = "2px 2px 10px 1px rgba(255, 255, 255, 0.3)";

    modalContent.style.backgroundColor = colorDark
    modalContent.style.borderColor = colorDark;

    const skillTextElements = document.querySelectorAll("#softSkillsContainer .col-6 div");
    console.log(skillTextElements);
    skillTextElements.forEach(skillElement => {
      skillElement.style.color = colorDark;
    });

    footer.style.color = "#fff";

    isDarkTheme = true;
    return;
  };

  if (isDarkTheme === true){
    const colorLight = "#969696";
    const svgIcon = document.querySelector('#theme-button svg');
    svgIcon.remove();
    themeIcon.remove();
    const newIconElement = document.createElement('i');
    newIconElement.className = 'fa-solid fa-moon me-2';
    newIconElement.style.color = colorLight;
    themeButton.append(newIconElement);

    body.style.backgroundColor = "#f8f2f9";
    bloc.forEach(element => {
      element.style.backgroundColor = colorLight;
    });
    blocHover.forEach(element => {
        element.classList.replace("bloc-hover-dark", "bloc-hovered");
    });

    goTopButton.style.color= colorLight;
    goTopButton.style.backgroundColor = colorLight;
    goTopButton.style.borderColor = colorLight;
    goTopButton.style.boxShadow = "2px 2px 10px 1px rgba(15, 15, 15, 0.3)";

    modalContent.style.backgroundColor = colorLight
    modalContent.style.borderColor = colorLight;

    const skillTextElements = document.querySelectorAll("#softSkillsContainer .col-6 div");
    console.log(skillTextElements);
    skillTextElements.forEach(skillElement => {
      skillElement.style.color = colorLight;
    });

    footer.style.color = colorLight;

    isDarkTheme = false;
  };
});

});