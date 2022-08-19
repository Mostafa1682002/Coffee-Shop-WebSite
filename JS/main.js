// Statr header
let search_icon=document.querySelector(".search");
let search_input=document.querySelector(".search-input");
let input=document.querySelector(".search-input input")
let close=document.getElementById("close");


search_icon.onclick=function(){
    search_input.classList.toggle("show");
    search_input.children[0].focus();
    //remove class found from Section Cards
    sectionCart.classList.remove("found");
    //remove class Visible from Links
    links.classList.remove("visible");
}

input.onkeyup=function(){
    if(input.value.length > 0){
        close.style.display="block";
        close.onclick=function(){
            let arr=input.value.split("");
            arr.pop();
            input.value=arr.join("")
            if(arr.length==0){
                close.style.display="none";
            }
        }
    }else{
        close.style.display="none";
    }
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
}

//Add Class active To Link Click
let allLinks=Array.from(document.querySelectorAll(".links li"));
allLinks.forEach(function(e){
    e.onclick=function(){
        allLinks.forEach((e)=>e.classList.remove("active"))
        e.classList.add("active");
        //remove class show from Links
        links.classList.remove("visible");
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


//if onclick on document remove all class from search ,links ,cart
document.body.children[1].onclick=function(){
    if(document.body.children[0].children[0].children[1].classList.contains("visible")){
        //remove class Visible from Links
        links.classList.remove("visible");
    }else if(document.body.children[0].children[0].children[2].children[3].classList.contains("show")){
        //remove class show from input
        search_input.classList.remove("show");
    }else if(document.body.children[0].children[0].children[3].classList.contains("found")){
        //remove class found from Cart
        sectionCart.classList.remove("found");
    }
}