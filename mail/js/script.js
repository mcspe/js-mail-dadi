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

const button = document.querySelector('.container .card button');

button.addEventListener('click', function(){

  const userMail = document.querySelector('.container .card input');

  if (document.querySelector('.result').classList.contains('d-none')) document.querySelector('.result').classList.remove('d-none');

  for(let i=0; i<authUserList.length; i++){
    if (userMail.value === authUserList[i]){
      i = authUserList.length;
      access = true;
      console.log('si');
    } else {
      access = false;
    }
  }
  
  if (access){
    document.querySelector('.result .negative').classList.add('d-none');
    document.querySelector('.result .positive').classList.remove('d-none');
    userMail.value = '';
  } else{
    document.querySelector('.result .positive').classList.add('d-none');
    document.querySelector('.result .negative').classList.remove('d-none');
  }

});
