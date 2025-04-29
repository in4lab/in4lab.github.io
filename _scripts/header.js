document.addEventListener("DOMContentLoaded", () => {
    // Check if the current page is the main page
    if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
        const header = document.querySelector("header");
        const scrollThreshold = 80; // Adjust this value as needed

        window.addEventListener("scroll", () => {
            if (window.scrollY > scrollThreshold) {
                header.removeAttribute("data-big");
            } else {
                header.setAttribute("data-big", "");
            }
        });
    }
});