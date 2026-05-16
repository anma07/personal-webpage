const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    form.style.display = "none";
    successMessage.style.display = "block";
});