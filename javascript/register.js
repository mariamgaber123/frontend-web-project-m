// Form switch buttons
const registerBtn = document.getElementById("show-register");
const loginBtn = document.getElementById("show-login");
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const formTitle = document.getElementById("form-title");

// Switch logic
registerBtn.onclick = () => {
  registerForm.style.display = "block";
  loginForm.style.display = "none";
  formTitle.textContent = "Register";
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
};

loginBtn.onclick = () => {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
  formTitle.textContent = "Login";
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
};

// Login form validation
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  const usernameInput = document.getElementById("login-username");
  const passwordInput = document.getElementById("login-password");
  const usernameError = document.getElementById("login-username-error");
  const passwordError = document.getElementById("login-password-error");

  // Reset previous error styles
  usernameInput.classList.remove("error");
  passwordInput.classList.remove("error");
  usernameError.style.display = "none";
  passwordError.style.display = "none";

  // Username validation
  if (!usernameInput.value.trim()) {
    usernameInput.classList.add("error"); // Add red border
    usernameError.textContent = "Username is required."; // Error message
    usernameError.style.display = "block"; // Show error message
    valid = false;
  }

  // Password validation
  if (!passwordInput.value.trim()) {
    passwordInput.classList.add("error"); // Add red border
    passwordError.textContent = "Password is required."; // Error message
    passwordError.style.display = "block"; // Show error message
    valid = false;
  }

  if (valid) {
    // Fetch users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      user =>
        user.username === usernameInput.value.trim() &&
        user.password === passwordInput.value.trim()
    );

    if (matchedUser) {
      localStorage.setItem("loggedInUser", matchedUser.username);
      window.location.href = "home/home.html";
    } else {
      // If credentials are incorrect, add red styles and error messages
      usernameInput.classList.add("error");
      passwordInput.classList.add("error");
      usernameError.textContent = "Invalid username or password.";
      passwordError.textContent = "Invalid username or password.";
      usernameError.style.display = "block";
      passwordError.style.display = "block";
    }
  }
});

// Register form validation
document.getElementById("register-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  const username = document.getElementById("username");
  const email = document.getElementById("reg-email");
  const password = document.getElementById("reg-password");
  const confirmPassword = document.getElementById("confirm-password");

  const usernameError = document.getElementById("username-error");
  const emailError = document.getElementById("reg-email-error");
  const passwordError = document.getElementById("reg-password-error");
  const confirmPasswordError = document.getElementById("confirm-password-error");

  // Username validation
  if (!username.value.trim()) {
    username.classList.add("error");
    usernameError.textContent = "Username is required.";
    usernameError.style.display = "block";
    valid = false;
  } else {
    username.classList.remove("error");
    usernameError.style.display = "none";
  }

  // Email validation
  if (!email.value.trim()) {
    email.classList.add("error");
    emailError.textContent = "Email is required.";
    emailError.style.display = "block";
    valid = false;
  } else {
    email.classList.remove("error");
    emailError.style.display = "none";
  }

  // Password validation
  if (!password.value.trim()) {
    password.classList.add("error");
    passwordError.textContent = "Password is required.";
    passwordError.style.display = "block";
    valid = false;
  } else {
    password.classList.remove("error");
    passwordError.style.display = "none";
  }

  // Confirm Password validation
  if (!confirmPassword.value.trim()) {
    confirmPassword.classList.add("error");
    confirmPasswordError.textContent = "Please confirm your password.";
    confirmPasswordError.style.display = "block";
    valid = false;
  } else if (password.value !== confirmPassword.value) {
    confirmPassword.classList.add("error");
    confirmPasswordError.textContent = "Passwords do not match.";
    confirmPasswordError.style.display = "block";
    valid = false;
  } else {
    confirmPassword.classList.remove("error");
    confirmPasswordError.style.display = "none";
  }

  if (valid) {
    // Fetch users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if username or email already exists
    const exists = users.some(
      user =>
        user.username === username.value.trim() ||
        user.email === email.value.trim()
    );

    if (exists) {
      alert("Username or Email already registered.");
      return;
    }

    // Add the new user to the list and update localStorage
    users.push({
      username: username.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
      favorites: []
    });

    // Update the localStorage
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", username.value.trim());
    alert("Registration successful!");
    window.location.href = "home/home.html";
  }
});