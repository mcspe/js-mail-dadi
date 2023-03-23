const authUserList = [
  'pinco.pallo@bmail.com',
  'ugo.deughi@bmail.com',
  'franco.franchi@bmail.com',
  'mario.rossi@bmail.com',
  'mario.bianchi@bmail.com',
  'mario.verdi@bmail.com',
  'tizio.caio@bmail.com',
];

let access = false;

let message;
//const userMail = prompt('inserire la mail');

for(let i=0; i<authUserList.length; i++){
  if (userMail === authUserList[i]){
    console.log('ok');
    i = authUserList.length;
    access = true;
  } else {
    console.log('NO');
    access = false;
  }
}

if (access){
  message = `Benvenuto`;
} else{
  message = `Indirizzo email non autorizzato, controlla di aver inserito correttamente il dato`;
}

document.querySelector('span').append(message);