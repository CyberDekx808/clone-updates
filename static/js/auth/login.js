//auth/login.js
//ensures show password toggle is working
const toggle = document.getElementById("togglePass");
const passwordField = document.getElementById("password");

if (toggle && passwordField) {
toggle.addEventListener("change", () => {
passwordField.type = toggle.checked ? "text" : "password";
});
}