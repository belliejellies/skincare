window.addEventListener("DOMContentLoaded",function()){

const sliderButton = document.getElementById("slider");
const closeButton = document.getElementById("close");
const divPanel = document.getElementById("division");

sliderButton.addEventListener("click",()=>{divPanel.classList.add("active")});
closeButton.addEventListener("click",()=>{divPanel.classList.remove("active")});

const form = document.getElementById("form");
const message = document.getElementById("message");
if(form && message){
    form.addEventListener("submit",function(event)){
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        if(password !== confirmPassword){
            message.textContent = "Passwords do not match!";
            return;
        }
    }
}
}
