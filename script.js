const THEME = {
    STORAGE_KEY: "theme",
    LIGHT: "light",
    DARK: "dark",
};

const themeToggleBtn = document.getElementById("theme-toggle-btn");
const themeToggleIcon = document.getElementById("theme-toggle");
const themeElements = document.getElementsByClassName("theme");
const getTheme = () => window.localStorage.getItem(THEME.STORAGE_KEY);

function changeToDarkTheme() {
    for (let index = 0; index < themeElements.length; index++) {
        const element = themeElements[index];
        element.classList.remove("light-theme");
        element.classList.add("dark-theme");
    }

    window.localStorage.setItem(THEME.STORAGE_KEY, THEME.DARK);
}

function changeToLightTheme() {
    for (let index = 0; index < themeElements.length; index++) {
        const element = themeElements[index];
        element.classList.remove("dark-theme");
        element.classList.add("light-theme");
    }

    window.localStorage.setItem(THEME.STORAGE_KEY, THEME.LIGHT);
}

themeToggleBtn.addEventListener("click", () => {
    if (getTheme() === THEME.LIGHT) {
        changeToDarkTheme();
    } else {
        changeToLightTheme();
    }
});

function setPrefferedTheme() {
    const theme = getTheme();

    if (theme) {
        switch (theme) {
            case THEME.LIGHT:
                changeToLightTheme();
                break;
            case THEME.DARK:
                changeToDarkTheme();
                break;
        }
    } else {
        if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            changeToLightTheme();
        } else {
            changeToDarkTheme();
        }
    }
}

window.onload = () => {
    setPrefferedTheme();
};
