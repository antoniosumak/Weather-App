const api = {
  key: "c29e85d23ed52ef4c9993487a4f104d9",
  base: "https://api.openweathermap.org/data/2.5/",
};
var slika = document.getElementById("kartica");
const search = document.querySelector(".searchbox");
search.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    dohvatiRezultat(search.value);
  }
}

function dohvatiRezultat(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(ispisiRezultat);
}

function ispisiRezultat(weather) {
  let grad = document.querySelector(".imegrada");
  grad.innerText = `${weather.name}, ${weather.sys.country}`;
  console.log(weather);
  let danas = new Date();
  let datum = document.querySelector(".datum");
  datum.innerText = datumi(danas);
  let temperatura = document.querySelector(".temperatura");
  temperatura.innerText = `${Math.round(weather.main.temp)}`;
  let vidljivost = document.querySelector(".vidljivost");
  vidljivost.innerHTML = `${weather.weather[0].main}`;
  let minmax = document.querySelector(".raspon");
  minmax.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(
    weather.main.temp_max
  )}°C`;
  const ikona = document.querySelector(".icon");
  var iconaa;
  icon = weather.weather[0].icon;
  iconaa = "a" + icon;
  ikonica = weather.weather[0].icon;
  ikona.innerHTML = `<img src="/ikonice/${iconaa}.png" />`;
}

function datumi(d) {
  const mjeseci = [
    "Siječanj",
    "Veljača",
    "Ožujak",
    "Travanj",
    "Svibanj",
    "Lipanj",
    "Srpanj",
    "Kolovoz",
    "Rujan",
    "Listopad",
    "Studeni",
    "Prosinac",
  ];
  const danitjedan = ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"];

  let dan = danitjedan[d.getDay()];
  let datum = d.getDate();
  let mjesec = mjeseci[d.getMonth()];
  let godina = d.getFullYear();

  return `${dan} ${datum} ${mjesec} ${godina}`;
}
