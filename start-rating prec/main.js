const stars = document.querySelectorAll('.fa-star-o')
const value = document.querySelector('.value')

let countOfStarSelected = -1;
stars.forEach((star,index)=>{
    star.dataset.rating = index + 1;
    star.addEventListener('mouseover',onMousehover);
    star.addEventListener('click',onClick);
    star.addEventListener('mouseleave',onMouseleave)
})

function onMousehover(event){
        let starValue = event.target.dataset.rating
        if(!starValue) return ;
        fillStars(starValue);
}


function fillStars(starValue){
   for(let i =0; i<5;i++){
    if(i<starValue){
           stars[i].classList.replace('fa-star-o','fa-star')
    }else{
        stars[i].classList.replace('fa-star','fa-star-o')
    }
   }
}

function onClick(event){
    countOfStarSelected  = event.target.dataset.rating ;
    // countOfStarSelected = starValue;
    fillStars(countOfStarSelected);
    value.textContent = countOfStarSelected;

}

function onMouseleave(){
    fillStars(countOfStarSelected);
}