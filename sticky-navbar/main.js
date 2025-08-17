const fixNavBar = document.querySelector('.navbar');

let navTop = fixNavBar.offsetTop 

window.onscroll = function(){
      handlestickynavbar();
}

function handlestickynavbar(){
   if(window.scrollY >= navTop){
        fixNavBar.classList.add("fix-navbar");
   }else{
        fixNavBar.classList.remove("fix-navbar");
   }
}