// Statr header
let search_icon=document.querySelector(".search");
let search_input=document.querySelector(".search-input");
let input=document.querySelector(".search-input input")
let close=document.getElementById("close");
let overlay=document.querySelector('.overlay');


search_icon.onclick=function(){
    search_input.classList.toggle("show");
    search_input.children[0].focus();
    //remove class found from Section Cards
    sectionCart.classList.remove("found");
    //remove class Visible from Links
    links.classList.remove("visible");
    //Add Class active From Overlay
}


//Click bar
let bars=document.querySelector(".bar");
let links=document.querySelector(".links");
bars.onclick=function(){
    links.classList.toggle("visible");
    //remove class show from Search
    search_input.classList.remove("show");
    //remove class found from Section Cards
    sectionCart.classList.remove("found");
    //Add Class active From Overlay
    overlay.classList.toggle('active');
}

//Add Class active To Link Click
let allLinks=Array.from(document.querySelectorAll(".links li"));
allLinks.forEach(function(e){
    e.onclick=function(){
        allLinks.forEach((e)=>e.classList.remove("active"))
        e.classList.add("active");
        //remove class show from Links
        links.classList.remove("visible");
        overlay.classList.remove('active');
    }
})

let cart=document.querySelector(".cart");
let sectionCart=document.querySelector(".cart-section");

cart.onclick=function(){
    sectionCart.classList.toggle("found");
    //remove class show from Links
    search_input.classList.remove("show");
    //remove class Visible from Links
    links.classList.remove("visible");
    //Add Class active From Overlay
}

overlay.onclick=function(){
    //remove class found from carts
    sectionCart.classList.remove("found");
    //remove class show from Links
    search_input.classList.remove("show");
    //remove class Visible from Links
    links.classList.remove("visible");
    //remove Class active From Overlay
    overlay.classList.remove('active'); 
}

//End Header

//Footer
let date=new Date();
let year=document.querySelector(".year");
year.innerHTML=date.getFullYear();

//Button Scroll
let buttonUp=document.querySelector(".btn");
window.onscroll=function(){
    if(window.scrollY >= 600){
        buttonUp.classList.add("dis");
    }else{
        buttonUp.classList.remove("dis");
    }
}
buttonUp.onclick=function(){
    window.scrollTo(0,0)
}

