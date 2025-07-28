const stars = document.querySelectorAll('.fa-star-o')
const selectedRatingValueText = document.querySelector('.selected-rating-value');
let currentTotalSelectedStars = -1;

stars.forEach((starItem, index)=>{
    starItem.dataset.rating= index+1;
    starItem.addEventListener('mouseover',handleMouseover);
    starItem.addEventListener('click',handlesOnClick);
    starItem.addEventListener('mouseleave',handleMouseleave);
});


function handleMouseover(event){
    let starValue = event.target.dataset.rating;
    if(!starValue) return ;
    handleFillColorStar(starValue);
}
 


// ye jo fiunction jo hai dynamic ho raha hai mtlab jab hum 3 sta pe hone to 3 tak golden kar do , jses hi ek piche kiys mose 2 pe to 2 tak golden kar do
function handleFillColorStar(starValue){
     for(let i =0;i<5;i++){
         if(i<starValue){
            stars[i].classList.replace("fa-star-o","fa-star");
         }else{
            stars[i].classList.replace("fa-star","fa-star-o");
         }
     }
}


function handlesOnClick(event){
    let starValue = event.target.dataset.rating;
    currentTotalSelectedStars=starValue;
    handleFillColorStar(currentTotalSelectedStars);
    selectedRatingValueText.textContent=currentTotalSelectedStars;
}

function handleMouseleave(){
    handleFillColorStar(currentTotalSelectedStars);
}



