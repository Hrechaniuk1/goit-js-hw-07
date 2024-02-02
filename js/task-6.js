function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector("#controls input")
const createBtn = document.querySelector("#controls button[data-create]")
const destrBtn = document.querySelector("#controls button[data-destroy]")
const boxCollection = document.querySelector("#boxes")
const randomBox = document.createElement("div")
randomBox.style.width = "300px"
randomBox.style.heigh = "300px"
randomBox.style.backgroundColor = '${ getRandomHexColor() }'
randomBox.style.marginLeft = "auto"
randomBox.style.marginRight = "auto"

createBtn.addEventListener("click", addItems)
destrBtn.addEventListener("click", deleteItems)

function addItems(event) {
  return boxCollection.insertAdjacentHTML('beforeend', randomBox);
}