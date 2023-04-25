

//server data
const apiKey = "9625ea697bfb8e08c25b88e663545b6c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const body = document.querySelector(".body");
const error = document.querySelector(".error");
const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".searchBtn");
const weatherImg = document.querySelector(".weatherImg");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  //check for server error
  if (response.status == 404) {
    error.style.display = "block";
    body.style.display = "none";
  } else {
    body.style.display = "block";
    error.style.display = "none";
  }

  let data = await response.json();

  console.log(data);

  document.querySelector(".description").innerHTML =
    data.weather[0].description;
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "m/s";

  if (data.weather[0].main == "Clouds") {
    weatherImg.src = "img/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherImg.src = "img/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherImg.src = "img/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherImg.src = "img/mist.png";
  } else if (data.weather[0].main == "Rain") {
    weatherImg.src = "img/rain.png";
  } else if (data.weather[0].main == "Snow") {
    weatherImg.src = "img/snow.png";
  }
}

//activate function when the button is pressed
searchBtn.addEventListener("click", () => {
  checkWeather(searchBar.value);
  searchBar.value = "";
});
