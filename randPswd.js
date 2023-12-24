const passwordBox = document.getElementById("password");
const len = 12;
        
const upper = "ABCDEFSGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*()_+-=<>,./?;[]{}";

const all = upper + lower + number + symbol;

function createPassword(){
    let password = "";

    password += upper[Math.floor(Math.random() * upper.length)]
    password += lower[Math.floor(Math.random() * lower.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while(len > password.length) {
        password += all[Math.floor(Math.random() * all.length)]
    }

    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}