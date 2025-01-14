let input = document.querySelectorAll('.input-local');
let button = document.querySelector('.send');
let mensage = document.querySelector('#mensage'); 

// Validação ao clicar no botão
button.addEventListener('click', function () {
    input.forEach((item) => {
        if (item.value === "") {
            item.style.backgroundColor = "red";
            mensage.style.visibility = 'visible'; 
        } else {
            item.style.backgroundColor = 'white'; 
        }
    });
});


//take off styles
input.forEach((item) => {
    item.addEventListener('click', function () {
        input.forEach((inputItem) => {
            inputItem.style.backgroundColor = "white"; 
            mensage.style.visibility = 'hidden'
        });
    });
});

//avoid send form

let form = document.querySelector('.field-input');

form.addEventListener('submit', (event) => {
    input.forEach((item) => {
      let inputField =  item.value.trim()

      if(!inputField){
        event.preventDefault(); 
        alert('por favor, preencha os dados');
      }
    })
    
})
