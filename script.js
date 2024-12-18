
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

const themeToggle = document.getElementById("themeToggle");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

// Check for saved theme in local storage or set default
const currentTheme = localStorage.getItem("theme") || "light";
document.body.classList.toggle("dark-mode", currentTheme === "dark");

// Set the correct icon on page load
if (currentTheme === "dark") {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
} else {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    
    // Update icons based on theme
    if (isDarkMode) {
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
        localStorage.setItem("theme", "dark");
    } else {
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
        localStorage.setItem("theme", "light");
    }
});


// Save theme preference
document.body.classList.contains("dark-mode")
    ? localStorage.setItem("theme", "dark")
    : localStorage.setItem("theme", "light");

function updateAuthButton(isLoggedIn) {
        const authButton = document.getElementById("authButton");
        const profileButton = document.getElementById("profileButton");
        if (isLoggedIn) {
            authButton.style.display = "none";
            profileButton.style.display = "inline-block";
        } else {
            authButton.style.display = "inline-block";
            profileButton.style.display = "none";
        }
    }
