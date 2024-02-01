const listOfThings = document.querySelector("#categories")


const categoryAmount = () => {
    const listOfThings = document.querySelector("#categories")
const itemsAmount = listOfThings.children.length
return `Кількість категорій в списку ${itemsAmount}`
}

console.log(categoryAmount())

const titleItemAmount = () => {
    const items = listOfThings.children
    const titlesList = []
    Array.from(items).forEach(item => {
    let title = item.querySelector("h2")
    let itemList = item.querySelector("ul")
    titlesList.push(`Список ${title.textContent} містить наступнку кількість елементів: ${itemList.children.length}!`)

})
    return titlesList.join(" ");
}

console.log(titleItemAmount())