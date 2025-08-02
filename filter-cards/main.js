const buttonWrapper = document.querySelector('.filter-buttons-wrapper');
const contentSection = document.querySelector('.content-wrapper');
const content=[
    {
        id:'Men',
        label:'Men shirt 1'
    },
    {
        id:'Men',
        label:'Men shirt 2'
    },
    {
        id:'Men',
        label:'Men shirt 3'
    },
    {
        id:'Men',
        label:'Men shirt 4'
    },
    {
        id:'Women',
        label:'Women shirt 1'
    },
    {
        id:'Women',
        label:'Women shirt 2'
    },
    {
        id:'Women',
        label:'Women shirt 3'
    },
    {
        id:'Women',
        label:'Women shirt 4'
    },
    {
        id:'Kids',
        label:'Kids shirt 1'
    },
    {
        id:'Kids',
        label:'Kids shirt 2'
    },
    {
        id:'Kids',
        label:'Kids shirt 3'
    },
    {
        id:'Kids',
        label:'Kids shirt 4'
    },
];
const categories = ["All","Men","Women","Kids"];


function createCategories(){
categories.forEach((category)=>{
   const buttonElement = document.createElement("button");
   buttonElement.innerText = category;
   buttonElement.classList.add("filter-button");
   buttonElement.setAttribute("data-filter",category);
   buttonWrapper.appendChild(buttonElement);
})
}

function createContent(){
    content.forEach((contentItem)=>{
          const singleContentItem = document.createElement("div");
          singleContentItem.classList.add("card",contentItem.id);
          singleContentItem.textContent = contentItem.label;
          contentSection.appendChild(singleContentItem);
    })
};

createCategories();
createContent();

const allButtons = document.querySelectorAll('.filter-button');
const allCards = document.querySelectorAll('.card');


function filterCards(CategoryOfSingleButton, allCards){

allCards.forEach((SingleCrad)=>{
    const IsAllShown = CategoryOfSingleButton.toLowerCase() === "all";
    const IsFilteredItem = !SingleCrad.classList.contains(CategoryOfSingleButton);

    if( IsFilteredItem && !IsAllShown){
        SingleCrad.classList.add("hide");
    }else{
             SingleCrad.classList.remove("hide");
    } 
})


}



allButtons.forEach((singleButton)=>{
    singleButton.addEventListener(('click'),()=>{
    const CategoryOfSingleButton = singleButton.dataset.filter;
    console.log(CategoryOfSingleButton);
    filterCards (CategoryOfSingleButton, allCards);
    })
    
})