const tab = document.querySelector(".tab")
tab.addEventListener("mouseover", addBorder)

function addBorder() {
  console.log("mouseover")
  tab.classList.add("carlos")
}
