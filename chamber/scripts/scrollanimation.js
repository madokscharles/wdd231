// SCROLL ANIMATION - PORT HARCOURT CHAMBER

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".membership-card");

    // Stop script if no cards exist (prevents console errors)
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                obs.unobserve(entry.target); // Animate once only
            }
        });
    }, {
        threshold: 0.3,  
        rootMargin: "0px 0px -50px 0px"
    });

    cards.forEach(card => observer.observe(card));

});
