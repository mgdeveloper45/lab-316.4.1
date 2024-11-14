const registerForm = document.getElementById("registration");
console.log(registerForm)
const loginForm = document.getElementById("login");
const errorDisplay = document.getElementById("errorDisplay");

function showError(message, inputElement) {
    errorDisplay.innerText = message;
    errorDisplay.style.display = "flex";
    inputElement.focus();
}

function clearError() {
    errorDisplay.style.display = "none";
}

registerForm.addEventListener("submit", evt => {
    evt.preventDefault();
    clearError();

    const username = document.getElementById("register-username").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value;
    const passwordCheck = document.getElementById("register-password-check").value;
    const termsAccepted = document.getElementById("terms").checked;
}) 