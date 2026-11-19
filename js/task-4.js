const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    const formData = {};
    event.preventDefault();
    let email = form.email.value.trim();
    let password = form.password.value.trim();
    if (email === "" || password === "") {
        alert('All form fields must be filled in');
        return;
    }
    formData.email = email;
    formData.password = password;
    console.log(formData);
    form.reset();
})