const output = document.querySelector("#name-output"),
    input = document.querySelector("#name-input");


input.addEventListener('input', () => {
    let user = input.value.trim();
    if (user === "") {
        user = "Anonymus";
    } else {
        output.textContent = user;
    }
})