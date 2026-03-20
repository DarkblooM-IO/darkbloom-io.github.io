// Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Make non-internal links open in new tab
document.querySelectorAll('a[href^="https://"], a[href^="http://"]').forEach((el) => el.setAttribute("target", "_blank"))
// Make tables follow Bootstrap styling
document.querySelectorAll('table').forEach((el) => el.classList.add("table"))

function toggleTheme() {
  const root = document.querySelector("html")
  root.setAttribute("data-bs-theme", root.getAttribute("data-bs-theme") == "dark" ? "light" : "dark")
}
