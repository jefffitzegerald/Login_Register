let data = {
    username: "",
    password: ""
};

const submit = document.getElementById("submit");
const username = document.getElementById("username");
const password = document.getElementById("password");

username.addEventListener("change", () => {

    data["username"] = username.value;
    if(!username.value.length) return submit.disabled = true;
    if(!data.password.length) return submit.disabled = true;
    return submit.disabled = false;

});

password.addEventListener("change", () => {

    data["password"] = password.value;
    if(!password.value.length) return submit.disabled = true;
    if(!data.username.length) return submit.disabled = true;
    return submit.disabled = false;

});

submit.addEventListener("click", () => window.location.href = "file:///D:/Allproject/Bot/Tugas/Login/login.html");