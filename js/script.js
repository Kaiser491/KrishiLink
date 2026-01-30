/* ================================
   KrishiLink - Enhanced Script
   Phase 2
   ================================ */

document.addEventListener("DOMContentLoaded", () => {

    console.log("KrishiLink Phase 2 JS loaded 🌾");

    /* -------- Active Navigation Highlight -------- */
    const navLinks = document.querySelectorAll("nav ul li a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage || 
            (currentPage === "" && link.getAttribute("href") === "index.html")) {
            link.style.borderBottom = "2px solid #ffffff";
        }
    });

    /* -------- Button Click Feedback (Hero Buttons) -------- */
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log(`Navigating to: ${btn.getAttribute("href")}`);
        });
    });

    /* -------- Feature Card Hover Log (optional dev aid) -------- */
    const featureCards = document.querySelectorAll(".feature-card");

    featureCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0 8px 18px rgba(0,0,0,0.12)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
        });
    });

});
