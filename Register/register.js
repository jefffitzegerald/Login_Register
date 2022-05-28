let data = {
    username: "",
    email: "",
    password: "",
    confirm_password: ""
};

const submit = document.getElementById("submit");
const username = document.getElementById("username");
const email = document.getElementById("email")
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

username.addEventListener("change", () => {

    data["username"] = username.value;
    if(!username.value.length) return submit.disabled = true;
    if(!data.email.length) return submit.disabled = true;
    if(!data.password.length) return submit.disabled = true;
    if(!data.confirm_password.length) return submit.disabled = true;
    return submit.disabled = false;

});

email.addEventListener("change", () => {

    data["email"] = email.value;
    if(!email.value.length) return submit.disabled = true;
    if(!data.username.length) return submit.disabled = true;
    if(!data.password.length) return submit.disabled = true;
    if(!data.confirm_password.length) return submit.disabled = true;
    if(password.value !== data.confirm_password) return submit.disabled = true;
    return submit.disabled = false;

});

password.addEventListener("change", () => {

    data["password"] = password.value;
    if(!password.value.length) return submit.disabled = true;
    if(!data.username.length) return submit.disabled = true;
    if(!data.email.length) return submit.disabled = true;
    if(!data.confirm_password.length) return submit.disabled = true;
    return submit.disabled = false;

});

confirm_password.addEventListener("change", () => {

    data["confirm_password"] = confirm_password.value;
    if(!confirm_password.value.length) return submit.disabled = true;
    if(!data.username.length) return submit.disabled = true;
    if(!data.email.length) return submit.disabled = true;
    if(!data.password.length) return submit.disabled = true;
    if(confirm_password.value !== data.password) return submit.disabled = true;
    return submit.disabled = false;

});

submit.addEventListener("click", () => window.location.href = `${__dirname}/register.html`);
