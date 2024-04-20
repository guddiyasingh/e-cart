function showCartItems(){
    var cartProductItem = document.createElement('div')
    var item= document.createElement('p')
    item.innerHTML = 'Product 1'
    cartProductItem.style.display = 'flex'
    cartProductItem.append(item)
    var itemContainer = document.getElementsByClassName("cart-item-container")[0]
    itemContainer.style.display = 'block'
    itemContainer.style.border='1px solid red;'
    itemContainer.append(cartProductItem)
}