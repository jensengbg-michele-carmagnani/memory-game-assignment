


// calling all the elements Card
let card = document.querySelectorAll('.card');
let card = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
console.log('card before shuffle: ', card);
 shuffel();
 console.log('card after shuffle: ', card);


//shuffel  the array 
function shuffel() {
	//console.log('card before shuffle: ', card);
	for (let i = card.length-1; i >= 0; i--) {
       // console.log('-----------iteration ' + i + '---------');
        let randomIndex = Math.floor(Math.random() * (i + 1));
        //console.log('RandomIndex: ', randomIndex);
        let itemAtIndex = card[randomIndex];
        //console.log('itemAtIndex: ', itemAtIndex);
        card[randomIndex] = card[i];
       // console.log('Card[0]: ', card[0]);
        // console.log('Still RandomIndex: ', randomIndex);
        // console.log('Card[i] before shuffle: ', card[i]);
        // console.log('card[randomIndex]', card[randomIndex]);
        card[i] = itemAtIndex;
        // console.log('card[i]', card[i]);
        // console.log('Card after shuffle: ', card);
        // console.log('-----------iteration---------');
    }
    
    return card;
  
}	




// Assign number(create a h3 to append to the card)
assignNuber();
function assignNuber(){
for (let i= 0; i < cardNumb.length; i++){
    let cardList = document.createElement('h3');
    cardList.innerHTML = cardNumb[i];
    cardElemnt[i].appendChild(cardList);
    console.log('cards number', cardList)
    }
return cardNumb
}



//console.log('cards array', deckElemnt );
flipCard();
console.log(card)
function flipCard(){
for (i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', function(event) {
        event.target.classList.toggle('fornt-card');
        console.log('cards array', cards );
        if (!hasFlippedCard) {
            if (lockBoard) return;
            hasFlippedCard = true;
            firstCard = this;
        } else {
            hasFlippedCard = false;
            secondCard = this;
            checkForMatch()
        }
    });
    
    }
    return flipCard;
}




