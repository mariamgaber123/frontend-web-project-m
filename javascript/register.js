// Form switch buttons
const loginBtn = document.getElementById("show-login");
const registerBtn = document.getElementById("show-register");
const forgetlink=document.getElementById("fo");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const resetForm=document.getElementById("Reset-form");
const formTitle = document.getElementById("form-title");
const formtoggle=document.getElementById("form-toggle");
// Switch logic
loginBtn.onclick = () => { 
  loginForm.style.display = "block";
  registerForm.style.display = "none";
  resetForm.style.display ="none";
  formTitle.textContent = "Login";
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
  
};
registerBtn.onclick = () => {
  registerForm.style.display = "block";
  loginForm.style.display = "none";
  resetForm.style.display ="none";
  formTitle.textContent = "Sign Up";
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
};

forgetlink.onclick = () =>{
  loginForm.style.display = "none";
  registerForm.style.display = "none";
  resetForm.style.display ="block";
  formTitle.textContent = "Reset Password";
  formtoggle.style.display="none";
}

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
    });
     alert("Registration successful!");
    window.location.href = "register.html";
    // Update the localStorage
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", username.value.trim());

   //change name when login
    localStorage.setItem("usernamenav",username.value.trim());
    document.getElementById("usernamenav").innerText = localStorage.getItem("usernamenav");
  }
});

// Reset form validation
document.getElementById("Reset-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;
  const emaill = document.getElementById("res-email");
  const passwordd = document.getElementById("res-password");
  const emaillError = document.getElementById("res-email-error");
  const passworddError = document.getElementById("res-password-error");

  // Email validation
  if (!emaill.value.trim()) {
    emaill.classList.add("error");
    emaillError.textContent = "Email is required.";
    emaillError.style.display = "block";
    valid = false;
  } else {
    emaill.classList.remove("error");
    emaillError.style.display = "none";
  }

  // Password validation
  if (!passwordd.value.trim()) {
    passwordd.classList.add("error");
    passworddError.textContent = "Password is required.";
    passworddError.style.display = "block";
    valid = false;
  } else {
    passwordd.classList.remove("error");
    passworddError.style.display = "none";
  }

  if (valid) {
    reset(emaill.value.trim(), passwordd.value.trim());
  }

  function reset(email, newPassword) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex(user => user.email === email);

    if (userIndex === -1) {
      alert("User not found.");
      return;
    }

    users[userIndex].password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Password reset successfully.");
    window.location.href = "home/home.html";
  }
});