var apiKey = "72dcba6758c0f3fef0a894c324ffa5fc";

var currentDate = moment().format("l");
var dateOneDate1 = moment().add(1, "d").format("l");
var dateTwoDate1 = moment().add(2, "d").format("l");
var dateThreeDate1 = moment().add(3, "d").format("l");
var dateFourDate1 = moment().add(4, "d").format("l");
var dateFiveDate1 = moment().add(5, "d").format("l");

var todayContainer = document.getElementById("weather-today");
var fetchButton = document.getElementById("fetch");

var dayOne = document.getElementById("weather-1");
var dayTwo = document.getElementById("weather-2");
var dayThree = document.getElementById("weather-3");
var dayFour = document.getElementById("weather-4");
var dayFive = document.getElementById("weather-5");

var dateOne = document.getElementById("date-1");
var dateTwo = document.getElementById("date-2");
var dateThree = document.getElementById("date-3");
var dateFour = document.getElementById("date-4");
var dateFive = document.getElementById("date-5");

var cityNameEl = document.querySelector("#city-search");
var cityHistory = document.querySelector("#city-history");

var cities = [];


// Fetch information from weather API (Today & 5 day forecast)
fetchButton.addEventListener("click", function getWeather(event) {
    event.preventDefault(); 

    var cityName = cityNameEl.value.trim();
    var requestUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + apiKey;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var latData = data[0].lat;
            var lonData = data[0].lon;

            var cityName = document.createElement("h1")
            cityName.textContent = data[0].name + " (" + currentDate + ")";
            todayContainer.append(cityName);

            var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latData + "&lon=" + lonData + "&exclude=minutely&units=imperial&appid=" + apiKey;
            fetch(requestUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data1) {
                    
                    var todayIcon = document.createElement("img");
                    var tempData = document.createElement("p");
                    var windData = document.createElement("p");
                    var humidityData = document.createElement("p");
                    var uvDataText = document.createElement("p");
                    var uvData = document.createElement("span");


                    tempData.textContent = "Temp: " + data1.current.temp;
                    windData.textContent = "Wind: " + data1.current.wind_speed;
                    humidityData.textContent = "Humidity: " + data1.current.humidity;
                    uvDataText.textContent = "UV Index: ";
                    uvData.textContent = data1.current.uvi;

                    var todayIconCode = data1.current.weather[0].icon
                    var todayIconUrl = "https://openweathermap.org/img/wn/" + todayIconCode + "@2x.png";
                    todayIcon.setAttribute("src", todayIconUrl);

                    todayContainer.append(todayIcon)
                    todayContainer.append(tempData);
                    todayContainer.append(windData);
                    todayContainer.append(humidityData);
                    todayContainer.append(uvDataText);
                    uvDataText.append(uvData);
                    uvData.classList.add("badge-success")
                    

                    var dayOneDate = document.createElement("h2")
                    var dayOneIcon = document.createElement("img");
                    var dayOneTemp = document.createElement("p");
                    var dayOneWind = document.createElement("p");
                    var dayOneHumidity = document.createElement("p");

                    dayOneDate.textContent = dateOneDate1;
                    dayOneTemp.textContent = "Temp: " + data1.daily[0].temp.day;
                    dayOneWind.textContent = "Wind: " + data1.daily[0].wind_speed;
                    dayOneHumidity.textContent = "Humidity: " + data1.daily[0].humidity;

                    var dayOneIconCode = data1.daily[0].weather[0].icon;
                    var dayOneIconUrl = "https://openweathermap.org/img/wn/" + dayOneIconCode + "@2x.png";
                    dayOneIcon.setAttribute("src", dayOneIconUrl);

                    dateOne.append(dateOneDate1);
                    dayOne.append(dayOneIcon);
                    dayOne.append(dayOneTemp);
                    dayOne.append(dayOneWind);
                    dayOne.append(dayOneHumidity);


                    var dayTwoDate = document.createElement("h2")
                    var dayTwoIcon = document.createElement("img");
                    var dayTwoTemp = document.createElement("p");
                    var dayTwoWind = document.createElement("p");
                    var dayTwoHumidity = document.createElement("p");

                    dayTwoDate.textContent = dateTwoDate1;
                    dayTwoTemp.textContent = "Temp: " + data1.daily[1].temp.day;
                    dayTwoWind.textContent = "Wind: " + data1.daily[1].wind_speed;
                    dayTwoHumidity.textContent = "Humidity: " + data1.daily[1].humidity;

                    var dayTwoIconCode = data1.daily[1].weather[0].icon;
                    var dayTwoIconUrl = "https://openweathermap.org/img/wn/" + dayTwoIconCode + "@2x.png";
                    dayTwoIcon.setAttribute("src", dayTwoIconUrl);

                    dateTwo.append(dateTwoDate1);
                    dayTwo.append(dayTwoIcon);
                    dayTwo.append(dayTwoTemp);
                    dayTwo.append(dayTwoWind);
                    dayTwo.append(dayTwoHumidity);

                    var dayThreeDate = document.createElement("h2")
                    var dayThreeIcon = document.createElement("img");
                    var dayThreeTemp = document.createElement("p");
                    var dayThreeWind = document.createElement("p");
                    var dayThreeHumidity = document.createElement("p");

                    dayThreeDate.textContent = dateThreeDate1;
                    dayThreeTemp.textContent = "Temp: " + data1.daily[2].temp.day;
                    dayThreeWind.textContent = "Wind: " + data1.daily[2].wind_speed;
                    dayThreeHumidity.textContent = "Humidity: " + data1.daily[2].humidity;

                    var dayThreeIconCode = data1.daily[2].weather[0].icon;
                    var dayThreeIconUrl = "https://openweathermap.org/img/wn/" + dayThreeIconCode + "@2x.png";
                    dayThreeIcon.setAttribute("src", dayThreeIconUrl);

                    dateThree.append(dateThreeDate1);
                    dayThree.append(dayThreeIcon);
                    dayThree.append(dayThreeTemp);
                    dayThree.append(dayThreeWind);
                    dayThree.append(dayThreeHumidity);

                    var dayFourDate = document.createElement("h2")
                    var dayFourIcon = document.createElement("img");
                    var dayFourTemp = document.createElement("p");
                    var dayFourWind = document.createElement("p");
                    var dayFourHumidity = document.createElement("p");

                    dayFourDate.textContent = dateFourDate1;
                    dayFourTemp.textContent = "Temp: " + data1.daily[3].temp.day;
                    dayFourWind.textContent = "Wind: " + data1.daily[3].wind_speed;
                    dayFourHumidity.textContent = "Humidity: " + data1.daily[3].humidity;

                    var dayFourIconCode = data1.daily[3].weather[0].icon;
                    var dayFourIconUrl = "https://openweathermap.org/img/wn/" + dayFourIconCode + "@2x.png";
                    dayFourIcon.setAttribute("src", dayFourIconUrl);

                    dateFour.append(dateFourDate1);
                    dayFour.append(dayFourIcon);
                    dayFour.append(dayFourTemp);
                    dayFour.append(dayFourWind);
                    dayFour.append(dayFourHumidity);

                    var dayFiveDate = document.createElement("h2")
                    var dayFiveIcon = document.createElement("img");
                    var dayFiveTemp = document.createElement("p");
                    var dayFiveWind = document.createElement("p");
                    var dayFiveHumidity = document.createElement("p");

                    dayFiveDate.textContent = dateFiveDate1;
                    dayFiveTemp.textContent = "Temp: " + data1.daily[4].temp.day;
                    dayFiveWind.textContent = "Wind: " + data1.daily[4].wind_speed;
                    dayFiveHumidity.textContent = "Humidity: " + data1.daily[4].humidity;

                    var dayFiveIconCode = data1.daily[4].weather[0].icon;
                    var dayFiveIconUrl = "https://openweathermap.org/img/wn/" + dayFiveIconCode + "@2x.png";
                    dayFiveIcon.setAttribute("src", dayFiveIconUrl);

                    dateFive.append(dateFiveDate1);
                    dayFive.append(dayFiveIcon);
                    dayFive.append(dayFiveTemp);
                    dayFive.append(dayFiveWind);
                    dayFive.append(dayFiveHumidity);

                })

        })

})





