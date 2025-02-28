document.addEventListener("DOMContentLoaded", function() {
  const toggleLink = document.getElementById("dark-mode-toggle");

  // 1. Check localStorage for darkMode setting
  const savedDarkMode = localStorage.getItem("darkMode");

  // 2. If darkMode is "true", enable dark mode on page load
  if (savedDarkMode === "true") {
    document.body.classList.add("dark-mode");
    if (toggleLink) {
      toggleLink.textContent = "Light Mode";
    }
  } else {
    document.body.classList.remove("dark-mode");
    if (toggleLink) {
      toggleLink.textContent = "Dark Mode";
    }
  }

  // 3. Toggle logic when the link is clicked
  if (toggleLink) {
    toggleLink.addEventListener("click", function(event) {
      event.preventDefault();
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "true");
        toggleLink.textContent = "Light Mode";
      } else {
        localStorage.setItem("darkMode", "false");
        toggleLink.textContent = "Dark Mode";
      }
    });
  }
});
