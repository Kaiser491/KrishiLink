/* ================================
   KrishiLink - Base Script
   Version: 1.0
   ================================ */

// Ensure script runs after page loads
document.addEventListener("DOMContentLoaded", function () {

    console.log("KrishiLink loaded successfully 🌾");

    // Navigation click feedback (simple, clean)
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            alert("This section will be available soon 🌱");
        });
    });

});