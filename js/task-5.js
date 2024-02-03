function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector(".change-color")
const siteBody = document.querySelector("body")
const colorText = document.querySelector(".color")
colorBtn.addEventListener("click", colorChangeFun)
function colorChangeFun() {
  siteBody.style.backgroundColor = getRandomHexColor()
  colorText.textContent = getRandomHexColor()
  
}
