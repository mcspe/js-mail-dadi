const dado = [1, 2, 3, 4, 5, 6];

//let access = false;

const button = document.querySelector('.container .card button');

function randomThrow(){
  const diceThrow = Math.floor(Math.random() * 6);
  return diceThrow;
}

button.addEventListener('click', function(){

  let computerTurn = randomThrow();
  let userTurn = randomThrow();
  let message;

  if (userTurn > computerTurn){
    message = 'hai vinto';
  } else if(computerTurn > userTurn){
    message = 'hai perso';
  } else{
    message = 'patta';
  }

  console.log(`
  hai estratto ${dado[userTurn]}, il computer ha estratto ${dado[computerTurn]}
  ${message}
  `);

});
