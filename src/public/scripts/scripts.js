const menu = document.querySelector('.menu');
const listMenu = document.querySelector('.list-menu');
let menuOpen = false;
let show = true;

menu.addEventListener("click", ()=>{
    if(!menuOpen){
        document.body.style.overflow = "hidden";
        menu.classList.add('open');
        listMenu.classList.add('on');
        menuOpen = true;
    }else{
        document.body.style.overflow = "initial";
        menu.classList.remove('open');
        listMenu.classList.remove('on');
        menuOpen = false;
    }
});
