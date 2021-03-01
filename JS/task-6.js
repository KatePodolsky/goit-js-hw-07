const validationInputRef = document.querySelector("#validation-input");
const validNumber = Number(validationInputRef.getAttribute('data-length'));

validationInputRef.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (validationInputRef.value.length!==validNumber) {validationInputRef.classList.add('invalid')
    }
    else {
        validationInputRef.classList.remove('invalid');
        validationInputRef.classList.add('valid')
    }
}