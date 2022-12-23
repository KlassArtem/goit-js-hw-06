const inpContrlEl = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

textElement.style.fontSize = inpContrlEl.value + 'px';

const textResize = () => {
    textElement.style.fontSize = `${inpContrlEl.value}px`;
}

inpContrlEl.addEventListener('input', textResize);