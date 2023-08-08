let emailDisplay = document.querySelector(".navbar-email")
let accountEmail = document.querySelector(".account-email")
let shoppingCar = document.querySelector(".nav-bar-shopping-car")
let myOrderDisplay = document.querySelector(".myOrder-display")
let menuMobileIcon = document.querySelector(".menu-mobile-icon")
let menuMobileDisplay = document.querySelector(".menu-mobile-display")
let cardsContainer = document.querySelector(".cards-container")
let aside = document.querySelector('aside')
let btnCloseAside = document.querySelector('.close-aside')
let mainContainer = document.querySelector('.main-container')
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
    name: 'Tortica',
    price: 25.000,
    img: '/img/cake.jpg'
})

function renderProductos(array){
    array.forEach(product=> {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src',product.img)
        productImg.addEventListener('click',function(){
            aside.classList.toggle('inactive')
            accountEmail.classList.add('inactive')
            myOrderDisplay.classList.add('inactive')
            renderAside(product)

        })

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
)}

function renderAside(object){

    let imgAside = document.querySelector('.aside-right > img')
    imgAside.setAttribute('src',object.img)

    let priceAside = document.querySelector('.price-name > h3')
    priceAside.textContent = '$ '+ object.price

    let nameAside = document.querySelector('.price-name > p')
    nameAside.textContent = object.name

    btnCloseAside.addEventListener('click',()=>{
        aside.classList.add('inactive')
    })
}

renderProductos(productList)






emailDisplay.addEventListener("click",()=>{
    
    let isClose = myOrderDisplay.classList.contains("inactive")
    if(!isClose){
        myOrderDisplay.classList.add("inactive")
    }
    accountEmail.classList.toggle("inactive")
    aside.classList.add('inactive')
    
})
shoppingCar.addEventListener("click",()=>{
    let isClose = accountEmail.classList.contains("inactive")
    let isClosetwo = aside.classList.contains('inactive')

    if(!isClose){
        accountEmail.classList.add("inactive")
    }else{
        myOrderDisplay.classList.toggle("inactive")
    }
    if(!isClosetwo){
        aside.classList.add('inactive')
    }
}) 

menuMobileIcon.addEventListener("click",()=>{
    menuMobileDisplay.classList.toggle('inactive')
    let isClose = menuMobileDisplay.classList.contains('inactive')
    if(isClose){
        mainContainer.classList.remove('inactive')
    }else{
        mainContainer.classList.add('inactive')
        myOrderDisplay.classList.add('inactive')
    }

  
})

/* btnCloseAside.addEventListener('click',()=>{
    aside.classList.add('inactive')
})  */


