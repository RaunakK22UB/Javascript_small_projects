const buttonUp = document.querySelector('.btn-scrollUp');
const buttonDown = document.querySelector('.btn-scrollDown');
const content = document.querySelector('.main-content');
const loader = document.querySelector('.loader');

function showloader(){
    loader.classList.remove("hide");
}
function removeloader(){
    loader.classList.add("hide");
}
function showbtn(){
    buttonDown.classList.remove("hidden");
    buttonUp.classList.remove("hidden");
}
function removebtn(){
    buttonDown.classList.add("hidden");
    buttonUp.classList.add("hidden");
}

async function fetchData(){
    showloader();
    removebtn();
    const response = await fetch("https://dummyjson.com/users?limit=100",{
        method:"GET"
    })
    const result = await response.json();
    console.log(result)
    displayData(result);
    removeloader();
    showbtn();
   
   
}

 function displayData(result){
   content.innerHTML = result.users.map((user)=>
           `<p>Name:- ${user.firstName} ,Age:- ${user.age}</p>`
   ).join(" ");
 }

 buttonDown.addEventListener('click',()=>{
  
      window.scrollTo({
        
        top:document.body.scrollHeight,
        behavior:"smooth"
    })
 })
 
 buttonUp.addEventListener('click',()=>{
      window.scrollTo({
        top:0,
        behavior:"smooth"
    })
  
 })

fetchData();

