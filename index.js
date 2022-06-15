let currentScore = 0;
let play1Score = 0;
let play2Score = 0;
let activePlayer = 1;
let diceRolled;
let scores = [0, 0, 0];
let playing = true;

let roll = document.querySelector('.btn1');
let hold = document.querySelector('.btn2');
let player1Score = document.querySelector('.player1Score');
let player2Score = document.querySelector('.player2Score');
let dice = document.querySelector('.dice');
dice.classList.add('hidden');

//The two lines of code helps to reset the page
let restart = document.querySelector('.restart'); //This code selects the new game buton
restart.addEventListener('click', reset); //Adds event listener to the button and help reset page
roll.addEventListener('click', play);


//Set of instructions to perform after the roll button is pushed
function play(){
  if(playing){
   diceRolled = Math.floor(Math.random() * (6 - 1 + 1) + 1); //get random digit
   dice.src = `./images/dice${diceRolled}.png`;// select image to display
   dice.classList.remove('hidden');
    
   //check if we rolled 1
   if(Number(diceRolled) !== 1){
      currentScore += Number(diceRolled);
      document.querySelector(`.player${activePlayer}CurrentScore`).textContent = currentScore;
      document.querySelector(`.player${activePlayer}`).style.backgroundColor = 'rgba(246, 208, 208, 0.4)';
   }
   else{
    //switch to next player
    currentScore = 0;
    document.querySelector(`.player${activePlayer}CurrentScore`).textContent = 0;
    document.querySelector(`.player${activePlayer}`).style.backgroundColor = 'rgba(75, 69, 69, 0.35)';
    activePlayer = activePlayer === 1 ? 2 : 1;
   }
  }
}

//Method reloads the web page
function reset(){
    location.reload();
}

//Hold and keep current score
hold.addEventListener('click', function(){
   scores[activePlayer] += currentScore;
   currentScore = 0;
   if(!(scores[activePlayer] >= 100)){
      document.querySelector(`.player${activePlayer}Score`).textContent = scores[activePlayer]
      document.querySelector(`.player${activePlayer}CurrentScore`).textContent = currentScore;
   }
   else{
      playing = false;
      dice.classList.add('hidden')
      document.querySelector(`.player${activePlayer}`).style.backgroundColor = 'black'
      document.querySelector(`.player${activePlayer}`).style.color = '#c7365f'
      document.querySelector(`.current${activePlayer}`).style.backgroundColor = '#a8346b'
      document.querySelector(`.current${activePlayer}`).style.color = 'white'
      document.querySelector(`.player${activePlayer}Score`).textContent = scores[activePlayer]
      document.querySelector(`.player${activePlayer}CurrentScore`).textContent = currentScore;
   }
   activePlayer = activePlayer === 1 ? 2 : 1;
})