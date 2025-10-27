const hexButton = document.querySelector('.hex-btn')
const hexValue  = document.querySelector('.hex-value')
const hexContainer = document.querySelector('.hex-color')
const hexButtonChange = document.querySelector('.hex-btn-change')
 
// ------------------hex color part 

hexButtonChange.addEventListener('click',()=>{
         let characterSet = '0123456789ABCDEF';
         let colours  = "#";

         for(let i =0; i<6;i++){
               colours += characterSet.charAt(Math.floor(Math.random()*characterSet.length))
         }
         hexValue.textContent = colours;
         hexButton.style.color=colours;
         hexContainer.style.backgroundColor = colours

})

function copytext(){
    navigator.clipboard.writeText(hexValue.textContent)
    alert(`color is copied ${hexValue.textContent}`)
}
hexButton.addEventListener('click',copytext);



// -------------------------------------rgb color part 

const rgbMain = document.querySelector('.rgb-color');
const rgbValue = document.querySelector('.rgb-value') ;
const REDrgb = document.querySelector('#red');
const GREENrgb = document.querySelector('#green');
const BLUErgb = document.querySelector('#blue');
const changeButton = document.querySelector('.rgb-btn-change');
const rgbButton = document.querySelector('.rgb-btn');


function rgbcol(){
    let redV = REDrgb.value;
    let greenV = GREENrgb.value
    let blueV = BLUErgb.value

    rgbValue.textContent = `rgb(${redV},${greenV},${blueV})`;
    rgbMain.style.backgroundColor = `rgb(${redV},${greenV},${blueV})`;

}



function copytextt(){
    navigator.clipboard.writeText(rgbValue.textContent);
    alert(`color is copied ${rgbValue.textContent}`);
}

REDrgb.addEventListener('input',rgbcol);
GREENrgb.addEventListener('input',rgbcol);
BLUErgb.addEventListener('input',rgbcol);


changeButton.addEventListener('click',()=>{
    let redV = REDrgb.value;
    let greenV = GREENrgb.value
    let blueV = BLUErgb.value

    rgbMain.style.backgroundColor = `rgb(${redV},${greenV},${blueV})`;
    rgbValue.textContent = `rgb(${redV},${greenV},${blueV})`;

})

rgbButton.addEventListener('click',copytextt)