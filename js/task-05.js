const inpEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const inpHandle = () => {

    if (inpEl.value.trim() > 0) {        
        outputEl.textContent = inpEl.value;
    } else {
        outputEl.textContent = 'Anonymous';
    }
}

inpEl.addEventListener('input', inpHandle);



// add trim   