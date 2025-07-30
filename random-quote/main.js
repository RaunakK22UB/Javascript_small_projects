const quoteText = document.querySelector('.text-container');
const btn = document.querySelector('.btn');
const loader = document.querySelector('.loader');



function showloader(){
loader.classList.add('show');
quoteText.classList.add('hide')

}

function removeloader(){
loader.classList.remove('show');
quoteText.classList.remove('hide')

}
async function fecthQuotes() {
    showloader()
    const response = await fetch('http://api.quotable.io/quotes/random', {
        method: "GET"
    })
    const data = await response.json();
    if(data){
           removeloader();
           displayQuote(data[0]);
    }
    displayQuote(data[0])
    console.log(data)
}

fecthQuotes();


function displayQuote(data) {
    console.log(data)

    quoteText.innerHTML = `
      
    <div class="quote-item">
    <p>${data.author}</p>
    <p>${data.content}</p>
   
    </div>

    `

}

btn.addEventListener('click',()=>{
    fecthQuotes();
})