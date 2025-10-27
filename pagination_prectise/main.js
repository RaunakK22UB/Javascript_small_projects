const dummyData = document.querySelector('.dummy-data');
const PreviousButton = document.querySelector('.prev-btn');
const NextButton = document.querySelector('.next-btn');
const pageButtons = document.querySelector('.page-buttons');


function createDummyData(){
    for(let i=1;i<=100;i++){
          const li = document.createElement('li');
          li.classList.add('li');
          li.textContent=`Card ${i}`
          dummyData.appendChild(li);
    }
}

createDummyData();

const extractAllListitems = document.querySelectorAll('.li');
let DataLimitEachPage = 10;
let pageCount = Math.ceil(extractAllListitems.length / DataLimitEachPage) ;

function creatPageButtons(idx){
    const pagebutton = document.createElement('button');
    pagebutton.classList.add('page-number');
    pagebutton.setAttribute('index-value',idx);
    pagebutton.textContent = idx;
    pageButtons.appendChild(pagebutton);

    pagebutton.addEventListener('click',()=>{
          handleCurrentPage(idx)
    })
}
function createIntialPageButtons(){
        for(let i =1;i<=pageCount;i++){
            creatPageButtons(i);
        }
}
createIntialPageButtons()


function handleCurrentPage(idx){
    
}