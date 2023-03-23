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

function getName(mail){
  const mailArr = mail.split('.');
  let name = mailArr[0];
  mailArr.pop();
  const lastName = mailArr[1].split('@');
  name += ' ' + lastName[0];
  return name;
}

button.addEventListener('click', function(){

  const userMail = document.querySelector('.container .card input');
  const userName = getName(userMail.value);

  if (document.querySelector('.result').classList.contains('d-none')) document.querySelector('.result').classList.remove('d-none');

  for(let i=0; i<authUserList.length; i++){
    if (userMail.value === authUserList[i]){
      i = authUserList.length;
      access = true;
    } else {
      access = false;
    }
  }
  
  if (access){
    document.querySelector('.result .negative').classList.add('d-none');
    document.querySelector('.result .positive').classList.remove('d-none');
    userMail.value = '';
    document.querySelector('.user').style.fontWeight = "bold";
    document.querySelector('.user').style.textTransform = "capitalize";
    document.querySelector('.user').append(userName);
  } else{
    document.querySelector('.result .positive').classList.add('d-none');
    document.querySelector('.result .negative').classList.remove('d-none');
  }

});
