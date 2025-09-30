// Authentication System
class AuthManager {
  constructor() {
    this.init();
  }

  init() {
    // Check if user is already logged in
    if (this.isLoggedIn() && window.location.pathname.includes("index.html")) {
      window.location.href = "dashboard6.html";
    }
  }

  login(loginId, password) {
    // Simple credential check 
    if (loginId === "Deskify" && password === "Deskify#468") {
      // Store login session
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userId", loginId);
      localStorage.setItem("loginTime", new Date().toISOString());
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userId");
    localStorage.removeItem("loginTime");
    window.location.href = "index.html";
  }

  isLoggedIn() {
    return localStorage.getItem("isLoggedIn") === "true";
  }

  getCurrentUser() {
    return localStorage.getItem("userId");
  }
}

// Initialize auth manager
const authManager = new AuthManager();

// Login form handler
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const loginId = document.getElementById("loginId").value;
    const password = document.getElementById("password").value;

    if (authManager.login(loginId, password)) {
      alert("Login successful!");
      window.location.href = "dashboard6.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
}

// Password toggle functionality
if (document.getElementById("togglePassword")) {
  document
    .getElementById("togglePassword")
    .addEventListener("click", function () {
      const passwordField = document.getElementById("password");
      const toggleIcon = document.getElementById("togglePassword");

      if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove("bi-eye");
        toggleIcon.classList.add("bi-eye-slash");
      } else {
        passwordField.type = "password";
        toggleIcon.classList.remove("bi-eye-slash");
        toggleIcon.classList.add("bi-eye");
      }
    });
}
