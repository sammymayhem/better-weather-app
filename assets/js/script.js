var apiKey = "72dcba6758c0f3fef0a894c324ffa5fc";

var todayContainer = document.getElementById("weather-today");
var fetchButton = document.getElementById("fetch");

function getWeaterApi() {
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=San+Diego&exclude=minutely&units=imperial&appid=" + apiKey;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            var cityData = document.createElement("h2");
            var tempData = document.createElement("p");
            var windData = document.createElement("p");
            var humidityData = document.createElement("p");
            var uvData = document.createElement("p");

            cityData.textContent = data.name;
            tempData.textContent = data.main.temp;
            windData.textContent = data.wind.speed;
            humidityData.textContent = data.main.humidity;

            console.log(cityData);

            todayContainer.append(cityData);
            todayContainer.append(tempData);
            todayContainer.append(windData);
            todayContainer.append(humidityData);

        }
        )
}

fetchButton.addEventListener('click', getWeaterApi);


// city (current date)
// temp F
// wind
// humidty
// uv rating