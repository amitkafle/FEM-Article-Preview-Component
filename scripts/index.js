const menuOpen = document.querySelector(".article__share--open")
const menuClose = document.querySelector(".article__share--close")
const menu = document.querySelector(".links")
const desktopMenu = document.querySelector(".menu")

menuOpen.addEventListener("click", (e)=>{
    if(menu.style.animationName == "menu-open"){
        menu.style.animationName = "menu-close";
        menuOpen.classList.remove("change__share");
    }
    else{
        menu.style.animationName = "menu-open";
        menuOpen.classList.add("change__share");
    }
    
})

menuClose.addEventListener("click", ()=>{
    menu.style.animationName = "menu-close";
})





