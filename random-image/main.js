const ImageWrapper = document.querySelector('.image-wrapper');
const buttonImage = document.querySelector('.btn-image');
let count = 1;
async function getRandomImage(count){

   for(let i = count ; i<= count +4;i++){
       let imgElement = document.createElement('img');
         imgElement.src=`https://picsum.photos/300?random=${i}`;
         ImageWrapper.appendChild(imgElement);
   }
 
}
getRandomImage(count);

buttonImage.addEventListener('click',()=>{
     getRandomImage(count += 5);
})
