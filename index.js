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
let ShoppingCounter = document.querySelector('.shopping-counter')
let MyOrderTotal = document.querySelector('.myOrder-total')
let TotalPriceMyOrder = document.querySelector('.total-price-myOrder')
let BtnAside = document.querySelector('.btn-aside')
let shoppingNumber = 0;
ShoppingCounter.textContent = shoppingNumber
let number = 0;





const productList = [];
productList.push({
    name: 'Sweets',
    price: 35.000,
    img: '/img/fresh-cakes.webp'
})
productList.push({
    name: 'Little cake',
    price: 55.000,
    img: '/img/birthday.webp'
})
productList.push({
    name: 'Other sweets',
    price: 15.000,
    img: '/img/best-cookies.webp'
})
productList.push({
    name: 'Black cake',
    price: 25.000,
    img: '/img/cake.jpg'
})
productList.push({
    name: 'Other cake',
    price: 75.000,
    img: '/img/rainbow.webp'
})

function renderProductos(array) {
    array.forEach(product => {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.img)
        productImg.addEventListener('click', function () {
            aside.classList.toggle('inactive')
            accountEmail.classList.add('inactive')
            myOrderDisplay.classList.add('inactive')
            renderAside(product)
        })
        

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText = `$ ${product.price.toFixed(3)}`

        const productName = document.createElement('p')
        productName.innerText = product.name

        const productInfoFigure = document.createElement('figure')
        const productImgCard = document.createElement('img')
        productImgCard.setAttribute('src', './img/shopping-cart.png')



        productImgCard.addEventListener('click', () => {

            shoppingNumber++
            ShoppingCounter.textContent = shoppingNumber

            console.log(shoppingNumber)


            let divOrder = document.createElement('div')
            let imgOrder = document.createElement('img')
            imgOrder.setAttribute('src', product.img)
            imgOrder.classList.add('img-myorder')
            let nameOrder = document.createElement('p')
            nameOrder.classList.add('parrafo_1')
            nameOrder.textContent = product.name
            let priceOrder = document.createElement('p')
            priceOrder.classList.add('parrafo_2')
            priceOrder.textContent = '$' + product.price.toFixed(3)
            let cancelMyOrder = document.createElement('p')
            number += product.price
            TotalPriceMyOrder.textContent = '$' + number.toFixed(3)
            cancelMyOrder.classList.add('parrafo_3')
            let imgCancelMyOrder = document.createElement('img')
            imgCancelMyOrder.setAttribute('src', '/img/x.png')
            imgCancelMyOrder.classList.add('img-x')
            cancelMyOrder.appendChild(imgCancelMyOrder)
            divOrder.appendChild(imgOrder)
            divOrder.appendChild(nameOrder)
            divOrder.appendChild(priceOrder)
            divOrder.appendChild(cancelMyOrder)
            myOrderDisplay.appendChild(divOrder)
            MyOrderTotal.insertAdjacentElement('beforebegin', divOrder)

            cancelMyOrder.addEventListener('click', () => {
                divOrder.remove()

                number -= product.price
                TotalPriceMyOrder.textContent = '$' + number.toFixed(3)
                ShoppingCounter.textContent = --shoppingNumber

            })

        })

        productInfoFigure.appendChild(productImgCard)
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
        cardsContainer.appendChild(productCard)





    }
    )
}

function renderAside(object) {

    let imgAside = document.querySelector('.aside-right > img')
    imgAside.setAttribute('src', object.img)

    let priceAside = document.querySelector('.price-name > h3')
    priceAside.textContent = '$ ' + object.price.toFixed(3)

    let nameAside = document.querySelector('.price-name > p')
    nameAside.textContent = object.name

    btnCloseAside.addEventListener('click', () => {
        aside.classList.add('inactive')
    })

}

renderProductos(productList)











emailDisplay.addEventListener("click", () => {

    let isClose = myOrderDisplay.classList.contains("inactive")
    if (!isClose) {
        myOrderDisplay.classList.add("inactive")
    }
    accountEmail.classList.toggle("inactive")
    aside.classList.add('inactive')

})
shoppingCar.addEventListener("click", () => {
    let isClose = accountEmail.classList.contains("inactive")
    let isClosetwo = aside.classList.contains('inactive')

    if (!isClose) {
        accountEmail.classList.add("inactive")
    } else {
        myOrderDisplay.classList.toggle("inactive")
    }
    if (!isClosetwo) {
        aside.classList.add('inactive')
    }
})

menuMobileIcon.addEventListener("click", () => {
    menuMobileDisplay.classList.toggle('inactive')
    let isClose = menuMobileDisplay.classList.contains('inactive')
    if (isClose) {
        mainContainer.classList.remove('inactive')
    } else {
        mainContainer.classList.add('inactive')
        myOrderDisplay.classList.add('inactive')
    }


})






