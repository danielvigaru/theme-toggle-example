const themeToggleBtn = document.getElementById("theme-toggle-btn");
const themeToggleIcon = document.getElementById("theme-toggle");
const themeElements = document.getElementsByClassName("theme");

function changeToDarkTheme() {
    for (let index = 0; index < themeElements.length; index++) {
        const element = themeElements[index];
        element.classList.remove("light-theme");
        element.classList.add("dark-theme");
    }
}

function changeToLightTheme() {
    for (let index = 0; index < themeElements.length; index++) {
        const element = themeElements[index];
        element.classList.remove("dark-theme");
        element.classList.add("light-theme");
    }
}

themeToggleBtn.addEventListener("click", () => {
    if (themeToggleIcon.classList.contains("light-theme")) {
        changeToDarkTheme();
        return;
    }

    changeToLightTheme();
});

function setPrefferedTheme() {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        changeToLightTheme();
    }
}

window.onload = () => {
    setPrefferedTheme();
};
