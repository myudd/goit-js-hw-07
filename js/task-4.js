const form = document.querySelector('.login-form');
let FormData = {};
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (form.email.value === "" || form.email.password === "") {
        alert('All form fields must be filled in')
    }
    FormData.email = form.email.value;
    FormData.password = form.password.value;
    form.reset();
})