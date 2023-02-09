// Dark mode
const darkModeToggleButton = document.querySelector('#darkModeToggleButton')
const darkModeValue = JSON.parse(localStorage.getItem("darkMode"))

const checkDarkmode = () => {
    if (!darkModeValue){
        localStorage.setItem("darkMode", JSON.stringify({ status: false }))
    }
}

checkDarkmode()

const darkModeToggle = () => {
    document.body.classList.toggle("dark")
    if (document.body.classList.value == "dark"){
        localStorage.setItem("darkMode",JSON.stringify({ status: true }))
    }
    else{
        localStorage.setItem("darkMode",JSON.stringify({ status: false }))
    }
}

if (darkModeValue.status){
    document.body.classList.add('dark')
}

darkModeToggleButton.addEventListener("click", darkModeToggle)

//Clickable projects

const bambooProject = document.querySelector("#bambooLink")
const restoProject = document.querySelector("#restoLink")
const mafiaProject = document.querySelector("#mafiaLink")
const wtrProject = document.querySelector("#wtrLink")

const bambooLink = "https://kuboxxxxx.github.io/ClickerGame/"
const restoLink = "https://github.com/Kuboxxxxx/Resto"
const mafiaLink = "https://pusheeneiro.itch.io/black-market"
const wtrLink = "https://pusheeneiro.itch.io/wtr"

const openWindow = (link) => {
    window.open(link)
}

bambooProject.addEventListener("click", function(){
    window.open(bambooLink)
})
restoProject.addEventListener("click", function(){
    openWindow(restoLink)
})
mafiaProject.addEventListener("click", function(){
    openWindow(mafiaLink)
})
wtrProject.addEventListener("click", function(){
    openWindow(wtrLink)
})