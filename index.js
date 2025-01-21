let firstCard = 10, secondCard = 11, sum;
let hasBlackJack = false, isAlive = true, message ="", messageEl, sumEl, cardsEl;
let cards = [firstCard, secondCard];
sum = firstCard + secondCard;

messageEl = document.getElementById("message-el");
sumEl = document.querySelector("#sum-el");
cardsEl = document.getElementById("cards-el");
document.getElementById("btn-start").addEventListener("click", startGame);
document.getElementById("btn-newCard").addEventListener("click", newCard);

function startGame(){
    renderGame();
}

function renderGame(){
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
    cardsEl.textContent = "Cards: " + cards[0] +" "+ cards[1];
}

function newCard(){
    console.log("Drawing a new card from the deck");
    let newCard = 4;
    sum += newCard;

    renderGame ();
    cardsEl.textContent = "Cards: " + firstCard +" "+ secondCard +" "+ newCard ;
    
}