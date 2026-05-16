const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.dataset.theme = "light";
}

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.textContent =
    document.body.dataset.theme === "light" ? "☀️" : "🌙";

toggleBtn.addEventListener("click", () => {
    if (document.body.dataset.theme === "light") {
        delete document.body.dataset.theme;
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    } else {
        document.body.dataset.theme = "light";
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    }
});