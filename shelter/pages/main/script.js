const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger_menu");
const logo = document.querySelector(".logo");

burger.onclick = () => burgerFunc();

function burgerFunc() {
    burgerMenu.style.animation = "slide-in 1s forwards";
    logo.style.position = "fixed";
    
    burger.style.position = "fixed";
    
    burger.style.right = "28px";
    burger.style.transform = "rotate(90deg)";
    burger.style.transition = "all .5s ease-in-out";

    burgerMenu.style.transition = "1s";
    burgerMenu.style.display = "flex";

    burger.onclick = () => {
        burgerMenu.style.animation = "slide-out 1s forwards";
        burger.style.transform = "rotate(0deg)";
        logo.style.position = "static";
        burger.style.position = "static";
        burgerMenu.style.display = "none";
        
        burger.onclick = () => burgerFunc();
    }
}

