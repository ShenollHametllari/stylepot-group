const top2 = document.getElementById("top2");
top2.classList.remove("is-sticky");
const logo2 = document.getElementById("logo-2")
const user = document.getElementById("user")
var poz = window.scrollY
const logo = document.getElementsByClassName("logo-img1")
const btnOnFade = document.getElementsByClassName(".bck-on.fade ")


window.addEventListener("scroll" , function(){
     poz = window.scrollY
    if(poz > 100){
        top2.classList.add("is-sticky")
        logo2.classList.add("logo-img1b")
        logo2.classList.remove("logo-img1")
        user.classList.add("user-none")
        user.classList.remove("user-img")
    }
    if(poz >1000){
     this.document.getElementById('topbtn').style.opacity= "0.5"
    }
    else{
        top2.classList.remove("is-sticky")
        logo2.classList.remove("logo-img1b")
        logo2.classList.add("logo-img1")
        user.classList.remove("user-none")
        user.classList.add("user-img")
        this.document.getElementById('topbtn').style.opacity= "1"

    }
    console.log(poz)
})