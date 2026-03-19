// Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Make non-internal links open in new tab
document.querySelectorAll('a[href^="http"]').forEach((el) => el.setAttribute("target", "_blank"))

function toggleTheme() {
  const root = document.querySelector("html")
  root.setAttribute("data-bs-theme", root.getAttribute("data-bs-theme") == "dark" ? "light" : "dark")
}
