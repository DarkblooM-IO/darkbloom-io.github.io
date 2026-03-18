// Current year autofill
document.querySelector("footer #date").innerText = new Date().getFullYear()

// Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Theme toggler
function toggleTheme() {
  const root = document.querySelector("html")
  const theme = root.getAttribute("data-bs-theme")
  root.setAttribute("data-bs-theme", theme == "dark" ? "light" : "dark")
}
