const output = document.querySelector("#name-output"),
    input = document.querySelector("#name-input");


input.addEventListener('input', () => {
    let user = input.value.trim();
    if (user === "") {
        user = "Anonymous";
    }
    output.textContent = user;
})