let emailDisplay = document.querySelector(".navbar-email")
let accountEmail = document.querySelector(".account-email")
let shoppingCar = document.querySelector(".nav-bar-shopping-car")
let myOrderDisplay = document.querySelector(".myOrder-display")
let menuMobileIcon = document.querySelector(".menu-mobile-icon")
let menuMobileDisplay = document.querySelector(".menu-mobile-display")


emailDisplay.addEventListener("click",()=>{
    
    let isClose = myOrderDisplay.classList.contains("inactive")
    if(!isClose){
        myOrderDisplay.classList.add("inactive")
    }
    accountEmail.classList.toggle("inactive")
    
})
shoppingCar.addEventListener("click",()=>{
    let isClose = accountEmail.classList.contains("inactive")
    if(!isClose){
        accountEmail.classList.add("inactive")
    }
    myOrderDisplay.classList.toggle("inactive")
}) 

menuMobileIcon.addEventListener("click",()=>{
    menuMobileDisplay.classList.toggle("inactive")
})
