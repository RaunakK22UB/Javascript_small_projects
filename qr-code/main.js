const qrContainer = document.querySelector('.qr-container');
const qrTextInput = document.querySelector('.qr-text');
const buttonQr= document.querySelector('.btn-qr');
const errormessage = document.querySelector('.error');
buttonQr.addEventListener('click',()=>{
    validatateInputField()
})

function validatateInputField(){
    if( qrTextInput.value.trim().length > 0 ){
          generateQrCode();   
    }else{
       errormessage.textContent="Enter text or url";
    }
}

function generateQrCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer,{
        text:qrTextInput.value,
        height:400,
        width:400,
        colorLight:"#fff",
        colorDark:"#000",
    });
    qrTextInput.value='';
    errormessage.textContent='';
}