const registerForm = document.querySelector("registration");
const loginForm = document.querySelector("login");
const errorDisplay = document.querySelector("errorDisplay");

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
}) 