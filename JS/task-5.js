const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    
    inputRef.value !== '' ? nameOutputRef.textContent = event.currentTarget.value : nameOutputRef.textContent =  'незнакoмец' 
       
}

 
