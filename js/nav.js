let navlist = document.querySelector(".v-class")
let ullist = document.querySelector(".ul-list")
let nav = document.querySelector(".nav-h");
let logo = document.querySelector(".logo")
let icon = document.getElementById("burger")


let burger = document.getElementById("burger")
burger.addEventListener("click",()=>{
    
    ullist.classList.toggle("v-class")
    navlist.classList.toggle("v-class")
    nav.classList.toggle(`nav-h`)
    icon.classList.toggle('activeicon')
    logo.classList.toggle(`dnone`)
})


