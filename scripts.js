document.addEventListener("DOMContentLoaded", function () {
    // Toggle navigation menu for mobile
    const navToggle = document.createElement("button");
    navToggle.textContent = "☰";
    navToggle.classList.add("nav-toggle");
    document.querySelector("header").prepend(navToggle);
    
    const nav = document.querySelector("nav ul");
    navToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Contact form validation
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Thank you for your message! I will get back to you soon.");
        this.reset();
    });
});
