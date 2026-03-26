let color = "danger"

for (let col of document.querySelectorAll("#col")) col.addEventListener("click", () => {
  const cells = col.querySelectorAll("#cell")
  let y = cells.length-1
  while (y > 0 && (cells[y].classList.contains("bg-danger") || cells[y].classList.contains("bg-warning"))) y--
  if (cells[y].classList.contains("bg-body")) cells[y].classList.remove("bg-body")
  if (!cells[y].classList.contains("bg-danger") && !cells[y].classList.contains("bg-warning")) {
    cells[y].classList.add(`bg-${color}`)
    color = color == "danger" ? "warning" : "danger"
  }
})
