window.addEventListener("DOMContentLoaded",function(){

const sliderButton = document.getElementById("slider");
const closeButton = document.getElementById("close");
const divPanel = document.getElementById("division");
if (sliderButton &&  closeButton && divPanel){
    sliderButton.addEventListener("click",()=>{divPanel.classList.add("active")});
closeButton.addEventListener("click",()=>{divPanel.classList.remove("active")});
}

const form = document.getElementById("form");
const message = document.getElementById("message");
if(form && message){
    form.addEventListener("submit",function(event){
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        console.log("password:",password);
        console.log("confirm password:",confirmPassword);

        if(password !== confirmPassword){
            message.textContent = "Passwords do not match!";
            return;
        }
    });
}

//Add to Cart Feature

const cartButton = this.document.querySelectorAll(".cart");
cartButton.forEach(button =>{
button.addEventListener("click", function(){
    const name = this.dataset.name;
    const price = parseFloat (this.dataset.price);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push ({name,price});
    localStorage.setItem("cart", JSON.stringify(cart))
    alert('This item has been added to your cart. '); 

});
});
});