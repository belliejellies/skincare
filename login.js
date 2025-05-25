window.addEventListener("DOMContentLoaded",function(){
    const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
if(loginForm && loginMessage){
    loginForm.addEventListener("submit",function(event){
        event.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        const users = JSON.parse(localStorage.getItem("users")) || []; 
        const matchUser = users.find(user => user.email === email && user.password === password)
        if(matchUser){
            localStorage.setItem("loggedInUser",JSON.stringify(matchUser));
            loginMessage.textContent = "You have successfully logged in!";
            window.location.href = "index.html";
        }else{
            loginMessage.textContent = "Passwords or usernames do not match!";
            loginMessage.style.color = "red";
        }      
    });
}
})
