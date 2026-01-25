
// HAMBURGER MENU

const hamButton = document.querySelector("#menubutton");
const navigation = document.querySelector("#animatemenu");

if (hamButton && navigation) {
    hamButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hamButton.classList.toggle("open");
    });
}

// FOOTER DATES

document.addEventListener("DOMContentLoaded", () => {

    // Current Year
    const yearSpan = document.querySelector("#year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Last Modified Date
    const lastModified = document.querySelector("#lastModifiedDate");
    if (lastModified) {
        lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }

});