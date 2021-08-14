let loginForm = document.querySelector('.login-form');

let email = document.querySelector('#email');
let emailHelp = document.querySelector('#emailHelp')

let password = document.querySelector('#password');
let passwordHelp = document.querySelector('#passwordHelp');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const emailInput = email.value;
    const passwordInput = password.value;

    if (!emailInput.includes('@')) {
        email.classList.add('is-invalid')
    } else {
        email.classList.remove('is-invalid')
    }

    if ((passwordInput.length < 8 || passwordInput.length > 20)) {
        password.classList.add('is-invalid')
    } else {
        password.classList.remove('is-invalid')
    }
})