const form = document.querySelector(".login-form")


form.addEventListener("submit", (event) => {
    event.preventDefault()
    let formResult = {}
    if ((form.elements.email.value.trim() === "") || (form.elements.password.value.trim() === "")) {
        alert("All form fields must be filled in")
    }
    else {
        formResult = {
            [form.elements.email.name]: form.elements.email.value.trim(),
            [form.elements.password.name]: form.elements.password.value.trim(),
            
        }
    }
    console.log(formResult)
    form.reset()
})
