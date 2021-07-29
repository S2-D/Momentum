const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASS = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;
  localStorage.setItem("username",username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASS);
}

loginForm.addEventListener("submit", onLoginSubmit)

