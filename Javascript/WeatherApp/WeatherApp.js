async function getweather() {
  const city = document.getElementById("city").value.trim();
  const { lat, lon } = await getGeolocation(city);

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d3495716a9b4a4295bef07c0a1d3e859`
  );

  const data = await response.json();

  document.getElementById("weatherdata").innerHTML = `
<div>
    <p>Temperature : ${(data.main.temp - 273.14).toFixed(2)}°C</p>
    <p>Humidity : ${data.main.humidity}%</p>
    <p>Description : ${data.weather[0].description}</p>
</div>
          <img src="https://openweathermap.org/img/wn/${
            data.weather[0].icon
          }@4x.png" alt="weather icon" />
  `;
}

async function getGeolocation(City) {
  console.log(City);
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=$(City)&limit=5&appid=d3495716a9b4a4295bef07c0a1d3e859`
  );

  const data = await response.json();

  const lat = data[0].lat;
  const lon = data[0].lon;

  return { lat, lon };
}
