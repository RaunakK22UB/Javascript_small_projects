const HexBtn = document.querySelector('.hex-color-button');
const HexColorValue = document.querySelector('.hex-color-name');
const ButtonColor = document.querySelector('.hex-color-button');
const HexMainContainer = document.querySelector('.hex-color-container');
const copyHexButton = document.querySelector('.copy-hex-color')
// to create random colour

HexBtn.addEventListener('click', () => {
    let chars = '0123456789ABCDEF';

    let color = '#';
    for (let i = 0; i < 6; i++) {
       color += chars.charAt(Math.floor(Math.random() * chars.length));

    }
     HexColorValue.textContent = color;
     ButtonColor.style.color =color;
     HexMainContainer.style.backgroundColor=color;
     

})

function copytexts(){
    navigator.clipboard.writeText(HexColorValue.textContent);
    alert(`Color is copied to clipboard:${HexColorValue.textContent}`)
}

copyHexButton.addEventListener('click',copytexts);



// code for the rgb color generator
const mainRGB = document.querySelector('.rgb-color-container');
const RGBred=document.querySelector('#Red')
const RGBgreen = document.querySelector('#green');
const RGBblue = document.querySelector('#Blue');
const rgbButton =document.querySelector('.rgb-button');
const CopyButtonrgb = document.querySelector('.copy-rgb-button');
const ColorText = document.querySelector('.rgb-color-name');

function rgbcol (){
    let reds = RGBred.value;
    let greens = RGBgreen.value;
    let blues = RGBblue.value;
    ColorText.textContent= `rgb(${reds},${greens},${blues})`;
    mainRGB.style.backgroundColor = `rgb(${reds},${greens},${blues})`;
}
function copytext(){
    navigator.clipboard.writeText(ColorText.textContent);
    alert(`Color is copied to clipboard:${ColorText.textContent}`)
}




RGBgreen.addEventListener('input',rgbcol);
RGBblue.addEventListener('input',rgbcol);
RGBred.addEventListener('input',rgbcol);

rgbButton.addEventListener('click',()=>{
    let reds = RGBred.value;
    let greens = RGBgreen.value;
    let blues = RGBblue.value;
    mainRGB.style.backgroundColor = `rgb(${reds},${greens},${blues})`;
})
CopyButtonrgb.addEventListener('click',copytext);