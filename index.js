let emailDisplay = document.querySelector(".navbar-email")
let accountEmail = document.querySelector(".account-email")
let shoppingCar = document.querySelector(".nav-bar-shopping-car")
let myOrderDisplay = document.querySelector(".myOrder-display")
let menuMobileIcon = document.querySelector(".menu-mobile-icon")
let menuMobileDisplay = document.querySelector(".menu-mobile-display")
let cardsContainer = document.querySelector(".cards-container")
const productList = [];
productList.push({
    name: 'Torta',
    price: 35.000,
    img: '/img/cake.jpg'
})
productList.push({
    name: 'Pastel',
    price: 55.000,
    img: '/img/cake.jpg'
})
productList.push({
    name: 'Dulces',
    price: 15.000,
    img: '/img/cake.jpg'
})
productList.push({
    name: 'Torta',
    price: 25.000,
    img: '/img/cake.jpg'
})

function renderProductos(array){
    for (product of array) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src',product.img)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText = `$ ${product.price}`

        const productName = document.createElement('p')
        productName.innerText = product.name

        const productInfoFigure = document.createElement('figure')
        const productImgCard = document.createElement('img')
        productImgCard.setAttribute('src', './img/shopping-cart.png')

        productInfoFigure.appendChild(productImgCard)
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
        cardsContainer.appendChild(productCard)

    }
}
renderProductos(productList)






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
