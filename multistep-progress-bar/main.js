const progress=document.querySelector('.progress');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
const iconwrapper = document.querySelectorAll('.icon-wrapper');


let currentStep = 1;


nextBtn.addEventListener('click',()=>{
     if(currentStep < iconwrapper.length){
         currentStep++;
     }
     handleUpdateStep();
});

prevBtn.addEventListener('click',()=>{
    if(currentStep > 1){
        currentStep--;
    }

     handleUpdateStep();
});

function  handleUpdateStep(){

    // // work-1 to make the icon active so we can see yellow circle
         iconwrapper.forEach((icon,index)=>{
               if(index < currentStep){
                icon.classList.add("active");
               }else{
                    icon.classList.remove("active");
               }
         });


         // work- 2 to show the progtress 
         progress.style.width = ((currentStep - 1) /(iconwrapper.length - 1))*100 + "%";

         // work -3  to disable the buttons

         if(currentStep == 1){
            prevBtn.disabled = true;
         }
         else if(currentStep === iconwrapper.length){
            nextBtn.disabled = true;
         }else{
            prevBtn.disabled = false;
            nextBtn.disabled = false;
         }
}