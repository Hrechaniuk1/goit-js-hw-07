const nameInput = document.querySelector("#name-input")
const hiNameOut = document.querySelector("#name-output")


nameInput.addEventListener("input", setName)

function setName(ev) {
    if (ev.currentTarget.value.trim() === "") {
        hiNameOut.textContent = "Anonymous"
    } else {
        hiNameOut.textContent = ev.currentTarget.value.trim()
    }
}

