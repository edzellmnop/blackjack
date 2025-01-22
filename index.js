let player = {
    name: "edge",
    chips: 145
}
let hasBlackJack = false, isAlive = false, message ="", messageEl, sumEl, cardsEl;
let cards = [];
let sum;

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name +": $" + player.chips;

messageEl = document.getElementById("message-el");
sumEl = document.querySelector("#sum-el");
cardsEl = document.getElementById("cards-el");
document.getElementById("btn-start").addEventListener("click", startGame);
document.getElementById("btn-newCard").addEventListener("click", newCard);


function getRandomCard(){ 
    let random = Math.floor(Math.random() * 13) + 1;

    if(random === 1){
        return 11;
    }
    else if(random > 10){
        return 10;
    }
    else{
        return random;
    }
    
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard(), secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
        
    }

    sumEl.textContent = "Sum: " + sum;

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
}

function newCard(){
    if(isAlive === true && hasBlackJack == false){
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard)
        renderGame ();
    }
    
}

