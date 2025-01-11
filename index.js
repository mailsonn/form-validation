let areaInputs = document.querySelectorAll('input'); // NodeList de inputs
let send = document.querySelector('.send');
let mensage = document.querySelector('#mensage');

send.addEventListener('click', function () {
    areaInputs.forEach(input => { // Itera sobre cada input
        if (input.value === "") {
            input.style.border = '1px solid red'; // Aplica o estilo ao input individual
            input.style.backgroundColor = '#f3acac';
            mensage.style.visibility = 'visible'; // Mostra a mensagem
        } else {
            input.style.border = '1px solid white';
            input.style.borderBottom = '2px solid #737380';
            input.style.backgroundColor = 'white';
        }
    });
});

// Adiciona evento 'focus' a cada input
areaInputs.forEach(input => {
    input.addEventListener('focus', function () {
        input.style.border = '1px solid white';
        input.style.backgroundColor = 'white';
        input.style.borderBottom = '2px solid #737380';
        mensage.style.visibility = 'hidden'; // Esconde a mensagem ao focar no input
    });
});

//negar form
let form = document.querySelector('#form');
let isValid = true;

form.addEventListener('submit', function(){
    areaInputs.forEach(input =>{
        if(input === ""){
            event.preventDefault();
            
        }
    })
    
})
