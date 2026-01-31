// Shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Convert membership level number to text
function getMembershipLevel(level) {
    switch (level) {
        case 2:
            return "Silver";
        case 3:
            return "Gold";
        default:
            return "Member";
    }
}

// Fetch & display spotlight members
async function fetchSpotlightMembers() {
    const spotlightContainer = document.querySelector("#spotlight-container");

    if (!spotlightContainer) return;

    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error("Failed to load members");

        const members = await response.json();

        // Only Silver & Gold members
        const qualifiedMembers = members.filter(
            member => member.membership_level === 2 || member.membership_level === 3
        );

        if (qualifiedMembers.length === 0) {
            spotlightContainer.innerHTML = "<p>No spotlight members available.</p>";
            return;
        }

        // Randomize and select up to 3
        const selectedMembers = shuffleArray(qualifiedMembers).slice(0, 3);

        spotlightContainer.innerHTML = "";

        selectedMembers.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("spotlight-card");

            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
                <h3>${member.name}</h3>
                <p><strong>Membership:</strong> ${getMembershipLevel(member.membership_level)}</p>
                <p>${member.phone_number}</p>
                <a href="${member.website_url}" target="_blank" rel="noopener">
                    Visit Website
                </a>
            `;

            spotlightContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Spotlight error:", error);
        spotlightContainer.innerHTML = "<p>Unable to load spotlight members.</p>";
    }
}

// Run automatically (defer-safe)
fetchSpotlightMembers();
