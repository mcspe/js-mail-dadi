//import {passName} from '../../mail/js/script.js';
const dado = [];
//console.log(passName);

for (let i = 1; i < 7; i++) {
  const diceImg = new Image('40', '40');
  diceImg.src = `../img/dice-six-faces-${i}.png`;
  dado.push(diceImg);
}

console.log(dado, dado[1] );

const button = document.querySelector('.container .card button');

function randomThrow(){
  const diceThrow = Math.floor(Math.random() * 6);
  return diceThrow;
}

function parentMultiple(parent, child){
  const imgTag = new Image('40', '40');
  imgTag.src = child.src;
  parent.append(imgTag);
}

button.addEventListener('click', function(){

  if (document.querySelector('.result').classList.contains('d-none')) document.querySelector('.result').classList.remove('d-none');

  document.querySelector('.result .text').innerHTML = '';

  let computerTurn = randomThrow();
  let userTurn = randomThrow();
  let message;
  const userDice = document.createElement('div');
  const computerDice = document.createElement('div');
  const resultMessage = document.createElement('p');

  if (userTurn > computerTurn){
    message = 'Complimenti! Hai vinto';
    resultMessage.classList.add('success');
  } else if(computerTurn > userTurn){
    message = 'Peccato! Hai perso';
    resultMessage.classList.add('fail');
  } else{
    message = 'Patta! Lancia un\'altra volta';
    resultMessage.classList.add('even');
  }
  
  userDice.append('TU ');
  parentMultiple(userDice, dado[userTurn]);
  //userDice.append(dado[userTurn]);
  
  computerDice.append('COMPUTER ');
  parentMultiple(computerDice, dado[computerTurn]);
  //computerDice.append(dado[computerTurn]);

  resultMessage.append(message);

  document.querySelector('.result .text').append(userDice, computerDice, resultMessage);

});
