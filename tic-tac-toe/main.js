const board = document.querySelector('.board');
const square = document.querySelectorAll('.square');
const reset = document.querySelector('.reset-btn');
const message = document.querySelector('.message');

const players = ['X','O'];

let currentplayer = players[0];
message.textContent=`X's Turn`;

const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];


for(let i =0;i<square.length;i++){
    square[i].addEventListener(('click'),()=>{
          if(square[i].textContent != ""|| isWon(currentplayer)){
             return;
          }

          square[i].textContent = currentplayer;
          //----- check win
          if(isWon(currentplayer)){
            message.textContent=`${currentplayer} has won!!! Please reset the game`;
            return;

          }
          //---- check tie
          if(isTie()){
             message.textContent=`It's a TIE please reset the game`;
             return;
          }

          currentplayer = currentplayer === players[0] ? players[1] : players[0];

          if(currentplayer===players[0]){
            message.textContent= `X's Turn`;
          }else{
            message.textContent= `O's Turn`;
          }

    });
}

function isWon(currentplayer){
    for(let i =0; i<winning.length;i++){
        const [a,b,c] = winning[i];
        if(square[a].textContent=== currentplayer && square[b].textContent === currentplayer && square[c].textContent===currentplayer){
            return true;
        }
            
        
    }
    return false;
}

function isTie(){
    for(let i=0;i<square.length;i++){
          if(square[i].textContent===""){
            return false;
          }
          
    }
    return true;
}

function resetGame(){
    for(let i=0;i<square.length;i++){
        square[i].textContent = "";
    }
    currentplayer=players[0];
    message.textContent=`X's Turn`
}

reset.addEventListener('click',()=>{
    resetGame();
})