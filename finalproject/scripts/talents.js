import { showModal } from "./modal.js";

// SELECT ELEMENT
const grid = document.querySelector("#talentsGrid");

// FETCH DATA
async function loadTalents() {
  try {
    const response = await fetch("data/talents.json");

    if (!response.ok) {
      throw new Error("Talents data failed to load");
    }

    const talents = await response.json();

    displayTalents(talents);

  } catch (error) {
    console.error("Error loading talents:", error);
    grid.innerHTML = "<p>Unable to load talents right now.</p>";
  }
}

// DISPLAY TALENTS
function displayTalents(talents) {
  grid.innerHTML = "";

  talents.forEach(talent => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="images/${talent.image}" 
           alt="${talent.name}" 
           loading="lazy">

      <h3>${talent.name}</h3>
      <p><strong>Category:</strong> ${talent.category}</p>
      <p><strong>Location:</strong> ${talent.location}</p>
      <p><strong>Rating:</strong> ⭐ ${talent.rating}</p>

      <button class="btn view-btn">View Details</button>
    `;

    card.querySelector(".view-btn").addEventListener("click", () => {
      showModal(talent);
    });

    grid.appendChild(card);
  });
}

loadTalents();