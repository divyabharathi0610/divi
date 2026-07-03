const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.getElementById("learnBtn").addEventListener("click", () => {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
});

document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
});