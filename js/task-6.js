function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector("#controls input")
const createBtn = document.querySelector("#controls button[data-create]")
const destrBtn = document.querySelector("#controls button[data-destroy]")
const boxCollection = document.querySelector("#boxes")

createBtn.addEventListener("click", createBoxes)
destrBtn.addEventListener("click", destroyBoxes)
inputNum.addEventListener("change", getInputValue)


let boxSize = 30
  

function createBoxes() {
  if ((getInputValue() <= 100) && (getInputValue() >= 1)) {

    for (let i = 1; i <= getInputValue(); i++) {
      const randomBox = `<div style=" width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()} ;"></div>`
      boxCollection.insertAdjacentHTML('beforeend', randomBox);
      boxSize += 10
    }
  }
  inputNum.value = ''
  return
}


function getInputValue() {
  let amount = inputNum.value;
  return amount

}

function destroyBoxes() {
  boxCollection.innerHTML = ""
  boxSize = 30
  return
}

