var apiKey = "72dcba6758c0f3fef0a894c324ffa5fc";

var currentDate = moment().format("l");

var todayContainer = document.getElementById("weather-today");
var fetchButton = document.getElementById("fetch");
var dayOne = document.getElementById("weather-1");
var dayTwo = document.getElementById("weather-2");
var dayThree = document.getElementById("weather-3");
var dayFour = document.getElementById("weather-4");
var dayFive = document.getElementById("weather-5");

// var new_date = moment(startdate, "DD-MM-YYYY").add(5, 'days');


// Get city name
// var getCityName = function (event) {
//     event.preventDefault();

//     var cityName = nameInputEl.value.trim();

//     if (username) {
//       getUserRepos(username);

//       repoContainerEl.textContent = '';
//       nameInputEl.value = '';
//     } else {
//       alert('Please enter a GitHub username');
//     }
//   };



// Fetch informatin from weather API (for main card)
function getWeatherApi() {
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

            cityData.textContent = data.name + " (" + currentDate + ")";
            tempData.textContent = "Temp: " + data.main.temp;
            windData.textContent = "Wind: " + data.wind.speed;
            humidityData.textContent = "Humidity: " + data.main.humidity;

            todayContainer.append(cityData);
            todayContainer.append(tempData);
            todayContainer.append(windData);
            todayContainer.append(humidityData);
        });
        
}

// Fetch information from weather API (5 day forecast)
function getFiveDay() {
    var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=32&lon=-117&exclude=minutely&units=imperial&appid=" + apiKey;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data1) {
            console.log(data1);

            var dayOneIcon = document.createElement("i");
            var dayOneTemp = document.createElement("p");
            var dayOneWind = document.createElement("p");
            var dayOneHumidity = document.createElement("p");

            dayOneIcon.textContent = data1.daily[0].weather[0].icon;
            dayOneTemp.textContent = "Temp: " + data1.daily[0].temp.day;
            dayOneWind.textContent = "Wind: " + data1.daily[0].wind_speed;
            dayOneHumidity.textContent = "Humidity: " + data1.daily[0].humidity;

            dayOne.append(dayOneIcon);
            dayOne.append(dayOneTemp);
            dayOne.append(dayOneWind);
            dayOne.append(dayOneHumidity);

            var dayTwoIcon = document.createElement("i");
            var dayTwoTemp = document.createElement("p");
            var dayTwoWind = document.createElement("p");
            var dayTwoHumidity = document.createElement("p");

            dayTwoIcon.textContent = data1.daily[1].weather[0].icon;
            dayTwoTemp.textContent = "Temp: " + data1.daily[1].temp.day;
            dayTwoWind.textContent = "Wind: " + data1.daily[1].wind_speed;
            dayTwoHumidity.textContent = "Humidity: " + data1.daily[1].humidity;

            dayTwo.append(dayTwoIcon);
            dayTwo.append(dayTwoTemp);
            dayTwo.append(dayTwoWind);
            dayTwo.append(dayTwoHumidity);

            var dayThreeIcon = document.createElement("i");
            var dayThreeTemp = document.createElement("p");
            var dayThreeWind = document.createElement("p");
            var dayThreeHumidity = document.createElement("p");

            dayThreeIcon.textContent = data1.daily[2].weather[0].icon;
            dayThreeTemp.textContent = "Temp: " + data1.daily[2].temp.day;
            dayThreeWind.textContent = "Wind: " + data1.daily[2].wind_speed;
            dayThreeHumidity.textContent = "Humidity: " + data1.daily[2].humidity;

            dayThree.append(dayThreeIcon);
            dayThree.append(dayThreeTemp);
            dayThree.append(dayThreeWind);
            dayThree.append(dayThreeHumidity);

            var dayFourIcon = document.createElement("i");
            var dayFourTemp = document.createElement("p");
            var dayFourWind = document.createElement("p");
            var dayFourHumidity = document.createElement("p");

            dayFourIcon.textContent = data1.daily[3].weather[0].icon;
            dayFourTemp.textContent = "Temp: " + data1.daily[3].temp.day;
            dayFourWind.textContent = "Wind: " + data1.daily[3].wind_speed;
            dayFourHumidity.textContent = "Humidity: " + data1.daily[3].humidity;

            dayFour.append(dayFourIcon);
            dayFour.append(dayFourTemp);
            dayFour.append(dayFourWind);
            dayFour.append(dayFourHumidity);

            var dayFiveIcon = document.createElement("i");
            var dayFiveTemp = document.createElement("p");
            var dayFiveWind = document.createElement("p");
            var dayFiveHumidity = document.createElement("p");

            dayFiveIcon.textContent = data1.daily[4].weather[0].icon;
            dayFiveTemp.textContent = "Temp: " + data1.daily[4].temp.day;
            dayFiveWind.textContent = "Wind: " + data1.daily[4].wind_speed;
            dayFiveHumidity.textContent = "Humidity: " + data1.daily[4].humidity;

            dayFive.append(dayFiveIcon);
            dayFive.append(dayFiveTemp);
            dayFive.append(dayFiveWind);
            dayFive.append(dayFiveHumidity);

        })
}


fetchButton.addEventListener('click', getWeatherApi);
fetchButton.addEventListener('click', getFiveDay);


// city (current date)
// temp F
// wind
// humidty
// uv rating


// icon
// temp
// wind
// humidty