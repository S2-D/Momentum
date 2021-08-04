const body = document.querySelector("body");
const hello = document.querySelector("h1");

hello.innerText = "Hello!";
hello.style.color = "white";

function handleWindowResize() {
  const winSize = window.innerWidth;
  if (winSize < 500) {
    body.style.backgroundColor = "goldenrod";
  } else if (winSize < 800) {
    body.style.backgroundColor = "purple";
  } else {
    body.style.backgroundColor = "dodgerblue";
  }
}

handleWindowResize();
window.addEventListener("resize", handleWindowResize);
