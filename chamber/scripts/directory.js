// PORT HARCOURT CHAMBER DIRECTORY

const directory = document.querySelector("#directory-container");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

function getMembershipLevel(level) {
    switch (level) {
        case 0:
            return "Non-Profit";
        case 1:
            return "Bronze";
        case 2:
            return "Silver";
        case 3:
            return "Gold";
        default:
            return "Unknown";
    }
}

// Display members
function displayMembers(members, view) {
    directory.innerHTML = "";
    directory.className = view;

    members.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone_number}</p>
            <p><strong>Membership:</strong> ${getMembershipLevel(member.membership_level)}</p>
            <p>
                <a href="${member.website_url}" target="_blank" rel="noopener">
                    Visit Website
                </a>
            </p>
        `;

        directory.appendChild(card);
    });
}

// Fetch member data
fetch("data/members.json")
    .then(response => response.json())
    .then(members => {
        displayMembers(members, "grid");

        gridButton.addEventListener("click", () => {
            displayMembers(members, "grid");
        });

        listButton.addEventListener("click", () => {
            displayMembers(members, "list");
        });
    })
    .catch(error => {
        console.error("Error loading members:", error);
        directory.innerHTML = "<p>Unable to load directory.</p>";
    });
