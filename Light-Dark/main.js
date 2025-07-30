const changeBtn = document.querySelector('.changeThemeBtn');
const body = document.body;
const text = document.querySelector('.text');

// this one way of changing using classes

// changeBtn.addEventListener('click', ()=> {
//     if(body.classList.contains('light')){
//         body.classList.remove('light')
//         body.classList.add('dark')

//     } else {
//         body.classList.remove('dark')
//         body.classList.add('light')
//     }
//     if(changeBtn.classList.contains('light')){
//         changeBtn.classList.remove('light')
//         changeBtn.classList.add('dark')

//     } else {
//         changeBtn.classList.remove('dark')
//         changeBtn.classList.add('light')
//     }
//     if(text.classList.contains('light')){
//         text.classList.remove('light')
//         text.classList.add('dark')

//     } else {
//         text.classList.remove('dark')
//         text.classList.add('light')
//     }
// })
changeBtn.addEventListener('click', ()=> {
      if(changeBtn.getAttribute('data-theme')==='dark'){
            changeBtn.setAttribute("data-theme","light");
      }else{
            changeBtn.setAttribute("data-theme","dark");
      } 

         if(body.getAttribute('data-theme')==='dark'){
            body.setAttribute("data-theme","light");
      }else{
            body.setAttribute("data-theme","dark");
      } 

         if(text.getAttribute('data-theme')==='dark'){
            text.setAttribute("data-theme","light");
      }else{
        text.setAttribute("data-theme","dark");
      } 

      

})