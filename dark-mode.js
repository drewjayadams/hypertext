document.addEventListener("DOMContentLoaded", function() {
  const toggleLink = document.getElementById("dark-mode-toggle");

  if (toggleLink) {
    toggleLink.addEventListener("click", function(event) {
      event.preventDefault();
      // Toggle the .dark-mode class on the body
      document.body.classList.toggle("dark-mode");

      // Check if dark-mode is active and adjust link text accordingly
      if (document.body.classList.contains("dark-mode")) {
        toggleLink.textContent = "light mode";
      } else {
        toggleLink.textContent = "dark mode";
      }
    });
  }
});
