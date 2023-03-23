const dado = [];

for (let i = 1; i < 7; i++) {
  const myImg = new Image('30', '30');
  myImg.src = `../img/dice-six-faces-${i}.png`;
  dado.push(myImg);
}

console.log(dado);

//let access = false;

const button = document.querySelector('.container .card button');

function randomThrow(){
  const diceThrow = Math.floor(Math.random() * 6);
  return diceThrow;
}

button.addEventListener('click', function(){

  if (document.querySelector('.result').classList.contains('d-none')) document.querySelector('.result').classList.remove('d-none');
  document.querySelector('.result .text').innerHTML = '';

  let computerTurn = randomThrow();
  let userTurn = randomThrow();
  let message;

  if (userTurn > computerTurn){
    message = 'Complimenti! Hai vinto';
  } else if(computerTurn > userTurn){
    message = 'Peccato! Hai perso';
  } else{
    message = 'Patta! Lancia un\'altra volta';
  }

  const userDice = document.createElement('div');
  userDice.append('TU ');
  userDice.append(dado[userTurn]);

  const computerDice = document.createElement('div');
  computerDice.append('COMPUTER ');
  computerDice.append(dado[computerTurn]);

  const resultMessage = document.createElement('p');
  resultMessage.append(message);

  document.querySelector('.result .text').append(userDice, computerDice, resultMessage);

});
