
document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.querySelector("#timestamp");
    if (timestampField) {
        timestampField.value = Date.now();
    }
});

const resultsContainer = document.querySelector("#results");

if (resultsContainer && window.location.search) {

    const params = new URLSearchParams(window.location.search);

    const capitalize = (text) =>
        text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : "";

    const timestamp = params.get("timestamp");
    const date = timestamp
        ? new Date(Number(timestamp)).toLocaleDateString()
        : "";
    const time = timestamp
        ? new Date(Number(timestamp)).toLocaleTimeString()
        : "";

    resultsContainer.innerHTML = `
        <h3>Application for ${capitalize(params.get("first"))} ${capitalize(params.get("last"))}</h3>
        <p><strong>Title:</strong> ${capitalize(params.get("title"))}</p>
        <p><strong>Email:</strong> <a href="mailto:${params.get("email")}">${params.get("email")}</a></p>
        <p><strong>Phone:</strong> ${params.get("phone")}</p>
        <p><strong>Organization:</strong> ${params.get("organization")}</p>
        <p><strong>Description:</strong> ${params.get("description")}</p>
        <p><strong>Membership Level:</strong> ${params.get("membership")}</p>
        <p><strong>Submitted on:</strong> ${date} at ${time}</p>
    `;
}
