// Current year autofill
document.querySelector("footer #date").innerText = new Date().getFullYear()

// Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Make non-internal links open in new tab
document.querySelectorAll('a[href^="http"]').forEach((el) => el.setAttribute("target", "_blank"))
