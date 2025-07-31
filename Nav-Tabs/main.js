const tabContainer = document.querySelector('.container');
const tabButtons = document.querySelectorAll('.tab-button ');
const contents = document.querySelectorAll('.content');


tabContainer.addEventListener('click',(event)=>{
    console.log(event.target.dataset);
    const tabButtonId = event.target.dataset.id;

    if(tabButtonId){
        tabButtons.forEach((btn)=>{
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
       
        contents.forEach((cont)=>{
            cont.classList.remove('active');
        });
        const contentItem = document.getElementById(tabButtonId);
        contentItem.classList.add('active');
    }

})