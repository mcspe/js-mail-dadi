const authUserList = [
  'pinco.pallo@bmail.com',
  'ugo.deughi@bmail.com',
  'franco.franchi@bmail.com',
  'mario.rossi@bmail.com',
  'mario.bianchi@bmail.com',
  'mario.verdi@bmail.com',
  'tizio.caio@bmail.com',
];

const userMail = prompt('inserire la mail');

for(let i=0; i<authUserList.length; i++){
  if (userMail === authUserList[i]){
    console.log('ok');
    i = authUserList.length;
  } else {
    console.log('NO');
  }
}