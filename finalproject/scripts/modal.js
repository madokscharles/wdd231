const modal = document.querySelector("#talentModal");

// OPEN MODAL
export function showModal(talent) {
  modal.innerHTML = `
    <h2>${talent.name}</h2>
    <p><strong>Category:</strong> ${talent.category}</p>
    <p><strong>Location:</strong> ${talent.location}</p>
    <p><strong>Rating:</strong> ⭐ ${talent.rating}</p>

    <button id="closeModal" class="btn">Close</button>
  `;

  modal.showModal();

  document
    .querySelector("#closeModal")
    .addEventListener("click", () => modal.close());
}