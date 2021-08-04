const clockTitle = document.querySelector(".js-clock");

function getDay() {
  const xmas = new Date("2021-12-25");
  const now = new Date();
  const distance = xmas.getTime() - now.getTime();

  const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = String(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(getDay, 1000);
