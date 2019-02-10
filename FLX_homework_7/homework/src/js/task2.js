// Your code goes here
let range = 5;
let doubleRange = range * 2;
let totalPrize = 0;
let maxPrize= 10;
let attempts = 3;
let startPlay = confirm('Do you want to play a game?');
let playAgain;
if(startPlay){
    while(attempts > 0){
        let randomNumber = Math.floor((Math.random() * range));
        let startGame = parseInt(prompt(`
            Enter a number from 0 to ${range}
            Attempts left: ${attempts}
            Total prize: ${totalPrize}$
            Possible prize on current attempt: ${maxPrize}$S`
    ));
        if(startGame === randomNumber){
            totalPrize = totalPrize + maxPrize;
            playAgain = confirm('Do you want to play again?');
            if(playAgain){
                attempts = 3;
                randomNumber = Math.floor((Math.random() * doubleRange));
                maxPrize = maxPrize * 3;
            }else{
                attempts === 0;
            }
        }else{
            attempts --;
            maxPrize = Math.floor(maxPrize / 2);
        }
        if(attempts === 0){
            alert('Thank you for a game. Your prize is ' + totalPrize + '$');
            playAgain = confirm(`Do you want to play again?`); 
            if(playAgain){
                attempts = 3;
                totalPrize = 0;
                maxPrize = 10;
            }else{
                alert('Thank you for a game. Your prize is ' + totalPrize + '$');
                playAgain = confirm(`Do you want to play again?`); 
            } 
        }
    }
}else{
    alert('You did not become a millionaire, but can.');
}

    
