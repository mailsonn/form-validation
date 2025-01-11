
let inputs = document.querySelector('input').value;

let errorInput = document.querySelector('input');

let send = document.querySelector('.send');

let mensage = document.querySelector('.mensage');

send.addEventListener('click', function(){
    if(inputs == ""){
        
        errorInput.style.border='2px solid red';
        errorInput.style.backgroundColor='#f3acac';
        
    }
})

errorInput.addEventListener('focus', function(){
    errorInput.style.border='1px solid white';
    errorInput.style.borderBottom='2px solid #737380';
    errorInput.style.backgroundColor='white';
})