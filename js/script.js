


const product = [
    {
        id:1,
        assets:'assets/headphone.jpg',
        title:"headphones",
        price:'$20'
    },

    {
        id:2,
        assets:'assets/DSLar.png',
        title:"camera",
        price:'$30'
    },

    {
        id:3,
        assets:'assets/earbuds.jpg',
        title:"earbuds",
        price:'$25'
    },

    {
        id:4,
        assets:'assets/lamp.png',
        title:"lamp",
        price:'$15'
    },
    {
        id:5,
        assets:'assets/laptop.jpg',
        title:"laptop",
        price:'$40'
    },
    {
        id:6,
        assets:'assets/modern-microphone.jpg',
        title:"microphone",
        price:'$25'
    },

    // {
    //     id:7,
    //     assets:'assets/smartwatches.png',
    //     title:"smartwatches",
    //     price:'$10'
    // }
]

const categories = [...new Set(product.map((item)=>
    {return item}))

]
let cart = document.getElementById("root")
cart.innerHTML=categories.map((item)=>{

    var {assets,title,price} = item;
    return(
        `<div class = "box">
        <div class = "image-box">
        <img src=${assets}></img>
        </div>
        <div class="left">
        <p> ${title}</p>
        <h2>${price}</h2>
        <button>Add to cart</button>
        </div>
         </div>`
    )

    
}).join('')