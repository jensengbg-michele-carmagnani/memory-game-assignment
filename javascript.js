


// calling all the elements Card
let cards = document.querySelectorAll('.card');
let cardNumber = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
document.getElementById('congratulation').classList.toggle('hide');

//console.log('card after shuffle: ', cardNumber);

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBord = false;
let moves = 0;
let counter = document.getElementById('counter');
let countMatch = [];

//shuffel  the array 
function shuffel() {
	//console.log('card before shuffle: ', card);
	for (let i = cardNumber.length-1; i >= 0; i--) {
       // console.log('-----------iteration ' + i + '---------');
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let itemAtIndex = cardNumber[randomIndex];
        cardNumber[randomIndex] = cardNumber[i];
        cardNumber[i] = itemAtIndex;
       
    }
    
    return cardNumber;
  
}	

// Assign number(
let numbers = document.querySelectorAll('.numbers');
assignNuber();

function assignNuber(){
  
  shuffel();

  for (let i= 0; i < cardNumber.length; i++){
    numbers[i].innerHTML = cardNumber[i];
    cards[i].setAttribute('data-framework', cardNumber[i]);
    console.log('cards number', cardNumber);
   // console.log(cards);
    }
    
return cardNumber   

}




// flip the card function 

function flipCard(event) {
 
  //counter for the moves
  moves++;
  counter.innerHTML= 'Moves '+ moves;

  if (!firstCard || !secondCard) {
    event.target.classList.toggle('front');
    //lock the bord 
    if (lockBord) return; 
    if (this === firstCard) return;

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;  
      return;    
    }
    secondCard = this;
    
  checkForMatch();
  }
 }
// Here we check for for the card's matches 
 function checkForMatch() {
   if (firstCard.dataset.framework === secondCard.dataset.framework) {
      countMatch ++;
      // In case all of the matches are found ==> Congratulation you win the game
      if( countMatch === 8){
        //if the matches are 8 then popUp the messagge of win!
        congratulation();

        countMatch === 0;
      }
     disableCards();
     return;
   }

  unflipCards();
 }
// here we prevent for futher click by removing the click EventLiistener
 function disableCards() {
   firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);
   resetBoard();
 }

 function unflipCards() {
     lockBord = true;
   setTimeout(() => {
     firstCard.classList.remove('front');
     secondCard.classList.remove('front');
     resetBoard();
   }, 1500);
   
 }

 function resetBoard(){
     [hasFlippedCard, lockBord] = [false,false];
     [firstCard, secondCard] = [null, null];
 }
// we assign en click event listener to avery cards
cards.forEach(card => card.addEventListener('click', flipCard));



//the function "flip back" the card and it's used we press the restart button
function flipBack(){
  moves = 0;
  counter.innerHTML = 'Moves:' + moves;
  for (i = 0; i < cards.length; i++){
  cards[i].classList.remove('front');
  }

}
// we assign the an event listener by click to the restart button 
document.getElementById('restart').addEventListener('click', restartGame);

// function restart the game 
function restartGame(event){
document.getElementById('congratulation').classList.toggle('hide');
flipBack();
resetBoard();
assignNuber();
cards.forEach(card => card.addEventListener('click', flipCard));

}
// popup message 
 function congratulation(){
    let message = document.getElementById('congratulation');
    message.classList.toggle('hide');
   let restart = document.getElementById('tryAgain');
   restart.addEventListener('click', restartGame );
   
  

 }








