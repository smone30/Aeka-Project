document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Login successful!");
            window.location.href = "profile.html";
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Sign-up successful! Please log in.");
            window.location.href = "login.html";
        });
    }
});