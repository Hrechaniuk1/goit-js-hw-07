function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector("#controls input")
const createBtn = document.querySelector("#controls button[data-create]")
const destrBtn = document.querySelector("#controls button[data-destroy]")
const boxCollection = document.querySelector("#boxes")
const randomBox = `<div style=" width: ${getSizeOfBox()}px; height: ${getSizeOfBox()}px; margin-left: auto; margin-right: auto; margin-bottom: 30px; background-color: ${getRandomHexColor() } ;"></div>`

function getSizeOfBox() {
  let sizeOf = 100
  for (let i = 1; i <= getInputValue(); i++){
sizeOf += 30

  }
  return sizeOf
} 

createBtn.addEventListener("click", addItems)
destrBtn.addEventListener("click", deleteItems)
inputNum.addEventListener("change", getInputValue)

function addItems(event) {
  for (let i = 1; i <= getInputValue(); i++)
    boxCollection.insertAdjacentHTML('beforeend', randomBox);
  inputNum.reset()
  return
}


function getInputValue(event) {
  let amount = inputNum.value;
  return amount

}

function deleteItems(event) {
  return boxCollection.innerHTML = ""
}