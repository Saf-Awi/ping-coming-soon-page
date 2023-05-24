const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    var emailValue = email.value.trim();

    if(emailValue === '' || !isValidEmail(emailValue)){
        addError(email, 'please provide a valid email address');

    } else {
        addSuccess(email);
    }
})

function addError(field, message){
    const controlForm = field.parentElement;
    const em = controlForm.querySelector('em');
    em.innerText = message;
    field.classList.add('error');
    field.classList.remove('success');
    em.classList.add('error-msg');
}

function addSuccess(field){
    field.classList.add('success');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }