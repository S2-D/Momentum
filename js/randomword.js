const todayContainer = document.querySelector(".today");
const d = new Date();
const weekday = new Array(7);
weekday[0] = "Sunday 🖖";
weekday[1] = "Monday 💪😀";
weekday[2] = "Tuesday 😜";
weekday[3] = "Wednesday 😌☕️";
weekday[4] = "Thursday 🤗";
weekday[5] = "Friday 🍻";
weekday[6] = "Saturday 😴";

const n = weekday[d.getDay()];

const randomWordArray = Array(
  "Oh my, it's ",
  "Whoop, it's ",
  "Happy ",
  "Seems it's ",
  "Awesome, it's ",
  "Have a nice ",
  "Happy fabulous ",
  "Enjoy your "
);
const randomWord =
  randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
todayContainer.innerHTML = randomWord + n;
