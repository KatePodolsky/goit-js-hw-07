const fontSizeControleRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text')

fontSizeControleRef.addEventListener('input', onFontSizeChange);

function onFontSizeChange(event) {
    textRef.style.fontSize = `${ event.currentTarget.value }px`
}
