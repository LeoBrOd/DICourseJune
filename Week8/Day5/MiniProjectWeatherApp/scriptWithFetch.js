const API_KEY =
  "6bc236fa8bd5e7e03f83fd8cea3eac74";
const button = document.getElementById("button");
const root = document.getElementById("root");
const errorMessage = document.getElementById(
  "errorMessage"
);
const cities = [];

button.addEventListener("click", function (e) {
  e.preventDefault();
  let cityName =
    document.getElementById("cityName");

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const cityNameOutput = data["name"];
      if (cities.includes(cityNameOutput)) {
        (errorMessage.style.visibility =
          "visible"),
          (errorMessage.innerHTML =
            "This city already viewed");
      } else {
        const countryOutput =
          data["sys"]["country"];
        const weatherConditions =
          data["weather"]["0"]["description"];
        const temperature = data["main"]["temp"];
        const img = data["weather"]["0"]["icon"];
        const newCard =
          document.createElement("div");
        newCard.setAttribute("id", "newCard");
        root.appendChild(newCard);
        const newCity =
          document.createElement("h4");
        newCity.innerHTML = cityNameOutput;
        newCard.appendChild(newCity);
        const newCountry =
          document.createElement("p");
        newCountry.innerHTML = countryOutput;
        newCard.appendChild(newCountry);
        const button =
          document.createElement("button");
        button.innerHTML = "x";
        button.addEventListener(
          "click",
          function () {
            root.removeChild(newCard);
            cities.splice(
              cities.indexOf(cityNameOutput),
              1
            );
          }
        );
        newCard.appendChild(button);
        const newTemperature =
          document.createElement("h2");
        newTemperature.innerHTML = `${temperature}&#8457`;
        newCard.appendChild(newTemperature);
        const newImg =
          document.createElement("img");
        newImg.setAttribute(
          "src",
          `http://openweathermap.org/img/wn/${img}@2x.png`
        );
        newCard.appendChild(newImg);
        const newDescription =
          document.createElement("p");
        newDescription.innerHTML =
          weatherConditions;
        newCard.appendChild(newDescription);
        cityName.value = "";
        errorMessage.style.visibility = "hidden";
        cities.push(cityNameOutput);
        console.log(cities);
      }
    })
    .catch(
      (err) => (
        (errorMessage.style.visibility =
          "visible"),
        (errorMessage.innerHTML =
          "Wrong city name")
      )
    );
});

document
  .getElementById("erase")
  .addEventListener("click", function () {
    root.innerHTML = "";
  });
