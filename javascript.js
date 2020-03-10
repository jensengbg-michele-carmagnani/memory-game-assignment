


// calling all the elements Card
let cards = document.querySelectorAll('.card');
let cardNumber = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
//  console.log('card before shuffle: ', cardNumber[3]);
 shuffel();
 //console.log('card after shuffle: ', cardNumber);

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBord = false;

//shuffel  the array 
function shuffel() {
	//console.log('card before shuffle: ', card);
	for (let i = cardNumber.length-1; i >= 0; i--) {
       // console.log('-----------iteration ' + i + '---------');
        let randomIndex = Math.floor(Math.random() * (i + 1));
        //console.log('RandomIndex: ', randomIndex);
        let itemAtIndex = cardNumber[randomIndex];
        //console.log('itemAtIndex: ', itemAtIndex);
        cardNumber[randomIndex] = cardNumber[i];
       // console.log('Card[0]: ', card[0]);
        // console.log('Still RandomIndex: ', randomIndex);
        // console.log('Card[i] before shuffle: ', card[i]);
        // console.log('card[randomIndex]', card[randomIndex]);
        cardNumber[i] = itemAtIndex;
        // console.log('card[i]', card[i]);
        // console.log('Card after shuffle: ', card);
        // console.log('-----------iteration---------');
    }
    
    return cardNumber;
  
}	




// Assign number(create a h3 to append to the card)
assignNuber();
function assignNuber(){
for (let i= 0; i < cardNumber.length; i++){
    let number = document.createElement('h3');
    number.innerHTML = cardNumber[i];
    //console.log('cardList: ', number);
   // console.log('cards[i]: ', cards[i]);
    cards[i].appendChild(number);
    cards[i].setAttribute('data-framework', cardNumber[i]);
   // console.log('cards number', number)
    }
return cardNumber   
}




// flip the card function 

function flipCard(event) {
  console.log('firstCard: ', firstCard);
  console.log('secondCard: ', secondCard);
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

 function checkForMatch() {
   if (firstCard.dataset.framework === secondCard.dataset.framework) {
     disableCards();
     return;
   }

unflipCards();
 }

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

  cards.forEach(card => card.addEventListener('click', flipCard));
  






