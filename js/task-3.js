const nameInput = document.querySelector("#name-input")
const hiNameOut = document.querySelector("#name-output")

nameInput.addEventListener("input", ((event) => {
    if (event.currentTarget.value.trim() === "") {
hiNameOut.textContent = "Anonymous"
    }
    else { 
        hiNameOut.textContent = event.currentTarget.value.trim()
    }

}))