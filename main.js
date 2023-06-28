//////////////link all our html elements///////////////
let prompter = document.querySelector('#prompt');
let Rbutton = document.querySelector('#rock');
let Pbutton = document.querySelector('#paper');
let Sbutton = document.querySelector('#scissors');


//////////////give a button the ablity to do something when clicked///////////////

// /* When active the rock button will start responding to click
// it will do whatever is in function here console logging clicked*/

// Rbutton.addEventListener('click', function clickFunction(event){
// console.log('clicked');
// });

//////////////create a player selection variable controled by buttons///////////////

/* games need variables that keep track of the state of the game */

/* When active clicking each button will change player choice and 
diplay it to the console*/

// let playerOneChoice = null;

// Rbutton.addEventListener('click', function clickFunction(event){
// playerOneChoice = 'rock';
// console.log(playerOneChoice);
// });

// Pbutton.addEventListener('click', function clickFunction(event){
//     playerOneChoice = 'paper';
//     console.log(playerOneChoice);
// });

// Sbutton.addEventListener('click', function clickFunction(event){
//     playerOneChoice = 'scissors';
//     console.log(playerOneChoice);
//  });  


//////////add new variable to track player turn and prompt next player///////////////
/* When active clicking each button will change player choice 
variable and player turn variable*/

 //let playerOneChoice = null;
 //let playerTurn = 1;

//Rbutton.addEventListener('click', function clickFunction(event){
/*games use a lot of is statements here we use it to only make the
player one weapon selection if it is their turn*/
//    if(playerTurn ==1){
//     playerOneChoice = 'rock';
// console.log(playerOneChoice);
// playerTurn = 2;
// prompter.innerHTML ='Player 2 select your weapon' 
// }
// });

// Pbutton.addEventListener('click', function clickFunction(event){
//    if(playerTurn ==1){
//        playerOneChoice = 'paper';
//    console.log(playerOneChoice);
//    playerTurn = 2;
//    prompter.innerHTML ='Player 2 select your weapon' 
//    }
// });

// Sbutton.addEventListener('click', function clickFunction(event){
//    if(playerTurn ==1){
//        playerOneChoice = 'scissors';
//    console.log(playerOneChoice);
//    playerTurn = 2;
//    prompter.innerHTML ='Player 2 select your weapon' 
//    }
// });

//////////////refactor///////////////

/*code was getting a bit unweildy so functions can simplify that*/

// function WeaponChoice(choice){
//     /*games use a lot of is statements here we use it to only make the
// player one weapon selection if it is their turn*/
//     if(playerTurn ==1){
//         playerOneChoice = choice;
//     console.log(playerOneChoice);
//     playerTurn = 2;
//     prompter.innerHTML ='Player 2 select your weapon' 
//     }
// };

//  let playerOneChoice = null;
//  let playerTurn = 1;

// Rbutton.addEventListener('click', function clickFunction(event){
// WeaponChoice('rock');
// });

// Pbutton.addEventListener('click', function clickFunction(event){
//     WeaponChoice('paper');
// });

// Sbutton.addEventListener('click', function clickFunction(event){
//     WeaponChoice('scissors');
//  });

//////////////set up player 2 choice and winner calculation///////////////
/* When active clicking each button will change player choice variable and 
player variable it will let both pick and then declare a winner or draw*/

// function WeaponChoice(choice){
//     /*games use a lot of is statements here we use it to only make the
// player one weapon selection if it is their turn*/
// if(playerTurn ==1){
//   playerOneChoice = choice;
// console.log("player 1 choice" + playerOneChoice);
// prompter.innerHTML ='Player 2 select your weapon' 
// }

  
// if (playerTurn ==2) {
//    playerTwoChoice = choice;
//    console.log("player 1 choice" + playerTwoChoice);
   
// /* & means two things must both be true to fulfill the condition
// || means or so only one must be true to fulfill the condition*/
//    if (playerOneChoice === playerTwoChoice) {
//         prompter.innerHTML ='Draw! To play again press any button to play again';
//    }
//    if (playerTwoChoice === "rock" & playerOneChoice === 'paper' || playerTwoChoice ==='paper' & playerOneChoice ==="scissors" || playerTwoChoice === "scissors" & playerOneChoice === 'rock' ) {
//        prompter.innerHTML =`${playerOneChoice} beats ${playerTwoChoice} player one wins! To play again press any button`;
//   }
//    if (playerOneChoice === "rock" & playerTwoChoice === 'paper' || playerOneChoice ==='paper' & playerTwoChoice ==="scissors" || playerOneChoice === "scissors" & playerTwoChoice === 'rock' ) {
//        prompter.innerHTML =`${playerTwoChoice} beats ${playerOneChoice} player two wins! To play again press any button`;
//   }
   
// }   

//  playerTurn= playerTurn+1; 
// };

// let playerOneChoice = null;
// let playerTwoChoice = null;
// let playerTurn = 1;

// Rbutton.addEventListener('click', function clickFunction(event){
// WeaponChoice('rock');
// });

// Pbutton.addEventListener('click', function clickFunction(event){
//    WeaponChoice('paper');
// });

// Sbutton.addEventListener('click', function clickFunction(event){
//    WeaponChoice('scissors');
// });


//////////////Let players play again///////////////

/* When active clicking the button after a game will reset it*/
//  function WeaponChoice(choice){
//       /*games use a lot of is statements here we use it to only make the
//  player one weapon selection if it is their turn*/
//  if(playerTurn ==1){
//     playerOneChoice = choice;
// console.log("player 1 choice" + playerOneChoice);
// prompter.innerHTML ='Player 2 select your weapon' 
// }

    
//  if (playerTurn ==2) {
//      playerTwoChoice = choice;
//      console.log("player 1 choice" + playerTwoChoice);
     
//  /* & means two things must both be true to fulfill the condition
//  || means or so only one must be true to fulfill the condition*/
//      if (playerOneChoice === playerTwoChoice) {
//           prompter.innerHTML ='Draw! To play again press any button to play again';
//      }
//      if (playerTwoChoice === "rock" & playerOneChoice === 'paper' || playerTwoChoice ==='paper' & playerOneChoice ==="scissors" || playerTwoChoice === "scissors" & playerOneChoice === 'rock' ) {
//          prompter.innerHTML =`${playerOneChoice} beats ${playerTwoChoice} player one wins! To play again press any button`;
//     }
//      if (playerOneChoice === "rock" & playerTwoChoice === 'paper' || playerOneChoice ==='paper' & playerTwoChoice ==="scissors" || playerOneChoice === "scissors" & playerTwoChoice === 'rock' ) {
//          prompter.innerHTML =`${playerTwoChoice} beats ${playerOneChoice} player two wins! To play again press any button`;
//     }
     
//  }   
//  if(playerTurn ==3){
    
// prompter.innerHTML ='Player 1 select you weapon' 
// playerTurn = 0;
// }
 
 
//    playerTurn= playerTurn+1; 
//  };
 
//   let playerOneChoice = null;
//   let playerTwoChoice = null;
//   let playerTurn = 1;
 
//  Rbutton.addEventListener('click', function clickFunction(event){
//  WeaponChoice('rock');
//  });
 
//  Pbutton.addEventListener('click', function clickFunction(event){
//      WeaponChoice('paper');
//  });
 
//  Sbutton.addEventListener('click', function clickFunction(event){
//      WeaponChoice('scissors');
//   });
 
 
  
 