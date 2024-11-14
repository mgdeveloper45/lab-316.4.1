const registerForm = document.getElementById("registration");
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

 
    const username = document.getElementById("register-username").value.trim().toLowerCase();
    const email = document.getElementById("register-email").value.trim().toLowerCase();
    const password = document.getElementById("register-password").value;
    const passwordCheck = document.getElementById("register-password-check").value;
    const termsAccepted = document.getElementById("terms").checked;

    
    const usernamePattern = /^[A-Za-z0-9]+$/;
    const regisUsr = document.getElementById("register-username");
    if (username.length < 4 || !usernamePattern.test(username) || new Set(username).size < 2) {
        return showError("Username must be at least 4 characters, contain 2 unique characters, and have no special characters.", regisUsr);
    }
 
    if (localStorage.getItem(username)) {
        return showError("Username is already taken.", regisUsr);
    }
    
   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regisEmail = document.getElementById("register-email");
    if (!emailPattern.test(email) || email.endsWith("@example.com")) {
        return showError("Email must be valid and cannot be from 'example.com'.", regisEmail);
    }

    
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    const regisPassCheck = document.getElementById("register-password");
    if (!passwordPattern.test(password) || password.toLowerCase().includes("password") || password.includes(username)) {
        return showError("Password must be 12 characters long, contain uppercase, lowercase, number, special character, and cannot contain 'password' or your username.", regisPassCheck);
    }
    if (password !== passwordCheck) {
        return showError("Passwords must match.", regisPassCheck);
    }

    
    if (!termsAccepted) {
        const term = document.getElementById("terms");
        return showError("You must accept the terms and conditions.", term);
    }

    
    const userData = { email, password };
    localStorage.setItem(username, JSON.stringify(userData));

    alert("Registration successful!");
    registerForm.reset();
});


loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearError();

  
    const username = document.getElementById("login-username").value.trim().toLowerCase();
    const password = document.getElementById("login-password").value;
    const persistLogin = document.getElementById("persist").checked;

   
    const user = JSON.parse(localStorage.getItem(username));
    if (!user) {
        return showError("Username does not exist.", document.getElementById("login-username"));
    }
    
    if (user.password !== password) {
        return showError("Incorrect password.", document.getElementById("login-password"));
    }

    let successMessage = "Login successful!";
    if (persistLogin) successMessage += " You will remain logged in.";
    alert(successMessage);
    loginForm.reset();
});
