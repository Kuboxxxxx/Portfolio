const darkModeToggleButton = document.querySelector('#darkModeToggleButton')
const darkModeValue = JSON.parse(localStorage.getItem("darkMode")).status

const darkModeToggle = () => {
    document.body.classList.toggle("dark")
    if (document.body.classList.value == "dark"){
        localStorage.setItem("darkMode",JSON.stringify({ status: true }))
    }
    else{
        localStorage.setItem("darkMode",JSON.stringify({ status: false }))
    }
}

if (darkModeValue){
    document.body.classList.add('dark')
}

darkModeToggleButton.addEventListener("click", darkModeToggle)