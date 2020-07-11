var navbar = document.querySelector(".navbar"),
    btnUp  = document.querySelector(".btn-up");


window.addEventListener("scroll",function(){
    navbar.classList.toggle("nav-onscroll", window.scrollY > 100);
    btnUp.classList.toggle("btn-up-hedin",  window.scrollY > 700);
})

btnUp.onclick = () =>{ 
    window.scrollTo(0,0);
}