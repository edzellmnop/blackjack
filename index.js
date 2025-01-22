let firstCard = getRandomCard(), secondCard = getRandomCard(), sum;
let hasBlackJack = false, isAlive = true, message ="", messageEl, sumEl, cardsEl;
let cards = [firstCard, secondCard];
sum = firstCard + secondCard;

messageEl = document.getElementById("message-el");
sumEl = document.querySelector("#sum-el");
cardsEl = document.getElementById("cards-el");
document.getElementById("btn-start").addEventListener("click", startGame);
document.getElementById("btn-newCard").addEventListener("click", newCard);


function getRandomCard(){ 
    let random = Math.floor(Math.random() * 10);
    return random;
}

function startGame(){
    cardsEl.textContent = "XXXXXXX"; 
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: "; 

    if(sum <= 20){
        message = "Do you want to draw a new card?"
        console.log(message);
        
    }
    else if( sum === 21){
        message ="Yes! You've got Blackjack" 
        console.log(message);
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game";
        console.log(message);
        isAlive = false
        
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
        
    }
}

function newCard(){
    console.log("Drawing a new card from the deck");
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard)
    renderGame ();
    
}

