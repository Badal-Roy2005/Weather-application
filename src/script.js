// http://api.weatherapi.com/v1/current.json?key=706684d5e5bd4c36b67162038250307&q=London&aqi=yes

const input = document.getElementById("input-box");
const button = document.getElementById("search");
const loc = document.getElementById("location");
const temp = document.getElementById("temp");
const local_time = document.getElementById("local_time");
const cloud = document.getElementById("cloud");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const image = document.getElementById("w_img");
const zero = document.getElementById("zero");

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await city_search(value);

  console.log(result);

  loc.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country} `;

  const time_zone = new Date(result.location);

  if (time_zone != "Invalid Date") {
    local_time.innerText = `${time_zone}`;
  }
  temp.innerText = `${result.current.temp_c}`;
  pressure.innerText = `${result.current.pressure_mb}hPa`;
  cloud.innerText = `${result.current.cloud}%`;
  humidity.innerText = `${result.current.humidity}%`;
  image.src = `http:${result.current.condition.icon}`;
  // https://openweathermap.org/img/wn/10d@4x.png
  zero.innerText = 0;
});

async function city_search(city) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=d33b5c81846940f4b93162308250307&q=${city}}&aqi=yes`
  );

  return await promise.json();
}
