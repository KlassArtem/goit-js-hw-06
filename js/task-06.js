

const inputMain = document.querySelector("#validation-input");

const inputLength = Number(inputMain.dataset.length);

inputMain.addEventListener("blur", handleInputTextLength);

function handleInputTextLength(event) {
  inputMain.classList.remove("valid", "invalid");

  if (event.currentTarget.value.length === inputLength) {
    validInputValue();
  } else {
    invalidInputValue();
  }
}

const validInputValue = () => {
  inputMain.classList.add("valid");
};

const invalidInputValue = () => {
  inputMain.classList.add("invalid");
};