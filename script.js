const name = document.getElementById("name")
const height = document.getElementById("height")
const skinColor = document.getElementById("skin-color")

const button = document.querySelector(".random-character")
button.addEventListener('click', (e) => {
    e.preventDefault()
    const randomNumber = Math.ceil(Math.random() * 83)
    name.innerHTML = "<em>Loading...</em>"
    height.innerHTML = "<em>Loading...</em>"
    skinColor.innerHTML = "<em>Loading...</em>"
    fetch(`https://swapi.dev/api/people/${randomNumber}`)
        .then(resp => resp.json())
        .then(character => {
            name.innerHTML = character['name']
            height.innerHTML = character['height']
            skinColor.innerHTML = character['skin_color']
    })
})
