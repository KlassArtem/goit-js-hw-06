const formBtnEl = document.querySelector(".login-form");

const handleSubmit = (event) => {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    
if (email.value.trim() === "" || password.value.trim() === "") {
return alert("Nothing㋡");
}
    const objForm = {
        email: email.value,
        password: password.value,
   } 
    console.log(objForm);
         
    event.currentTarget.reset();
    
}

formBtnEl.addEventListener("submit", handleSubmit);

// add trim()