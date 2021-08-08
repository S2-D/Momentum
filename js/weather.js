const weatherDiv = document.getElementById("weather");
const city = document.querySelector("#weather span:first-child");

const weather = document.querySelector("#weather span:last-child");

const API_KEY = "4725f2232e942b4710dd0676bb0c2497";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C `;
      const wether_icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      const icon_image = document.createElement("IMG");
      icon_image.src = wether_icon;
      weatherDiv.appendChild(icon_image);
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
