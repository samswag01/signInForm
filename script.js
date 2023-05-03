"use strict";

let form = document.querySelector('.form'),
    submitBtn = document.querySelector('input[type="submit"]'),
    pwField = document.querySelector('input#password'),
    pwConf = document.querySelector('input#password-conf'),
    errorField = document.querySelector('.error');

pwConf.addEventListener('input', (event) => {
    if (event.target.value !== pwField.value) {
        event.target.setCustomValidity('passwords do not match');
        errorField.classList.add('active');
    } else {
        event.target.setCustomValidity('');
        errorField.classList.remove('active')
    }
});

document.querySelectorAll('.form__inner input').forEach(input => {
    input.addEventListener('focus', event => {
        event.target.classList.add('invalid-input');
    }, {capture: false, once: true});
});
