/*const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));*/
const allItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("total");

let total = 0;
const itemMap = {}
cart.forEach(item=>{
    const key = item.name+item.price
    if(!itemMap[key]){
        itemMap[key]={item,quantity:1}
    }else{
        itemMap[key].quantity++
    }
    total+=item.price
})

Object.values(itemMap).forEach(item=>{
    const list = document.createElement("list");
    list.textContent = `${item.name}${item.price}${item.quantity}`
    allItems.appendChild(list)
})
totalPrice.textContent = total;