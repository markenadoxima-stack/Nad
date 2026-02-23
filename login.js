const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(email === "" || password === ""){
    alert("Please fill in all fields.");
    return;
  }

  // Fake login validation (front-end only)
  if(email === "admin@email.com" && password === "123456"){
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password.");
  }
});