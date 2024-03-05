const clickbanner = {

    isUpperCase: false,

    init: function() {
        clickbanner.allKey = document.querySelectorAll(".key");
        clickbanner.majKey = document.querySelector(".maj");
        clickbanner.returnKey = document.querySelector(".return");
        clickbanner.allColorButton = document.querySelectorAll("div.colorbutton button");
        clickbanner.screenSelect = document.querySelector(".screen");

        document.addEventListener("keydown", clickbanner.handleKeyOnLetter);

        clickbanner.allKey.forEach(element => {
            element.addEventListener("click", clickbanner.handleClickOnLetter);
        });

        clickbanner.majKey.addEventListener("click", clickbanner.upperCase);

        clickbanner.returnKey.addEventListener("click", clickbanner.sliceLast)

        clickbanner.allColorButton.forEach(element => {
            element.addEventListener("click", clickbanner.changeColor);
        });
    },

    handleClickOnLetter: function (event) {
        console.log(event.currentTarget.textContent);
        clickbanner.addLetter(event.currentTarget.textContent);
    },

    handleKeyOnLetter: function (event) {
        clickbanner.allKey.forEach(element => {
            if (event.key === element.textContent) { clickbanner.addLetter(element.textContent);};
            ;
        });

        if (event.shiftKey) { clickbanner.upperCase() };
        if (event.key === "Backspace") { clickbanner.sliceLast() };
    },

    addLetter: function (letter) {
        if (clickbanner.isUpperCase === true) {
            letter = letter.toUpperCase();
        }
        clickbanner.textCurrent = document.querySelector(".text");
        clickbanner.textCurrent.textContent = clickbanner.textCurrent.textContent+letter;
    },

    upperCase: function () {
        clickbanner.isUpperCase = !clickbanner.isUpperCase;
        clickbanner.majKey.classList.toggle("pressed");
    },

    sliceLast: function () {
        clickbanner.textCurrent.textContent = clickbanner.textCurrent.textContent.slice(0, -1);
    },

    changeColor: function (event) {
        colorToChange = event.currentTarget.textContent;
        if (colorToChange === "Rouge") { clickbanner.screenSelect.style.color = "red"};
        if (colorToChange === "Rose") { clickbanner.screenSelect.style.color = "#f0f"};
        if (colorToChange === "Orange") { clickbanner.screenSelect.style.color = "orange"};
        if (colorToChange === "Vert") { clickbanner.screenSelect.style.color = "green"};
    },
}

document.addEventListener('DOMContentLoaded', clickbanner.init);