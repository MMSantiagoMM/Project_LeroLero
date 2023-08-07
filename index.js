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

        productImg.addEventListener('click',()=>{
            aside.classList.toggle('inactive')
            accountEmail.classList.add('inactive')
            myOrderDisplay.classList.add('inactive')

        
           /*  
            let pI = document.createElement('p')
            pI.classList.add('close-aside')
            pI.textContent = "X"
            let imgI = document.createElement('img')
            imgI = productImg
            let sectionI = document.createElement('section')
            sectionI.classList.add('detail-product')
            let divI = document.createElement('div')
            divI.classList.add('price-name')
            let h3I = document.createElement('h3')
            h3I = productPrice
            let p2I = document.createElement('p')
            p2I = productName
            let div2I = document.createElement('div')
            div2I.classList.add('description')
            let p3I = document.createElement('p')
            p3I.textContent= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In consequuntur ducimus voluptatum laboriosam hic.'
            let btnAside = document.createElement('button')
            btnAside.classList.add('btn-aside')
            btnAside.textContent = 'Add to car'
            const imgB = document.createElement('img')
            imgB.setAttribute('src','./img/shopping-cart.png')

            aside.appendChild(pI)
            aside.appendChild(imgI)
            aside.appendChild(sectionI)
            sectionI.appendChild(divI)
            divI.appendChild(h3I)
            divI.appendChild(p2I)
            sectionI.appendChild(div2I)
            div2I.appendChild(p3I)
            sectionI.appendChild(btnAside)
            btnAside.appendChild(imgB) */


        })

        

    }
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


