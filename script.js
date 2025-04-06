const sliderButton = document.getElementById("slider");
const closeButton = document.getElementById("close");
const divPanel = document.getElementById("division");

sliderButton.addEventListener("click",()=>{divPanel.classList.add("active")});
closeButton.addEventListener("click",()=>{divPanel.classList.remove("active")});

