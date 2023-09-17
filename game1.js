'use strict';
const player1Hscore = document.getElementById('score--0');
const player2Hscore = document.getElementById('score--1');
let player1Cscore = document.getElementById('current--0');
let player2Cscore = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let score,ap,gameState,scores;
const initial = () =>{
    score = 0;
    scores = [0, 0];
    ap = 0;
    gameState = true;
    player1Hscore.innerHTML=0;
    player2Hscore.innerHTML=0; 
    dice.classList.add('hidden');
    player1Cscore.textContent = 0;
    player2Cscore.textContent = 0;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
}

initial();
const swicthPlayer = () =>{
    document.getElementById(`current--${ap}`).textContent = 0;
        score = 0;
        if(ap === 0){
            ap =1;
        }else{
            ap = 0;
        }
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
}
rollBtn.addEventListener('click', ()=>{
    if(gameState){
        let n = Math.floor(Math.random()*6)+1;
    score += n;
    dice.classList.remove('hidden');
    dice.src = `diceImages/d${n}.png`;
    if(n === 1){
        swicthPlayer();
    }else{
        document.querySelector(`#current--${ap}`).textContent = score;
    }
    }
})

holdBtn.addEventListener('click', ()=>{
        if(gameState){
            scores[ap] += score;
        document.getElementById(`score--${ap}`).textContent = scores[ap]; 
        if(Number(document.getElementById(`score--${ap}`).textContent) >= 100){
            let winner = document.querySelector(`.player--${ap}`);
            winner.classList.replace('player--active' , 'player--winner');
            gameState = false;
        }else{
            swicthPlayer();
        }
        }
})

newBtn.addEventListener('click',initial);