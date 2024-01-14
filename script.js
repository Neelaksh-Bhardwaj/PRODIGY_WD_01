document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#fff";
            navbar.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
        } else {
            navbar.style.backgroundColor = "transparent";
            navbar.style.boxShadow = "none";
        }
    });
});
