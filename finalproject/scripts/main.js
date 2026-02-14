
// MOBILE MENU

const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("#mainNav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// LOCAL STORAGE (user visit)

const visits = Number(localStorage.getItem("konoma-visits")) || 0;
localStorage.setItem("konoma-visits", visits + 1);