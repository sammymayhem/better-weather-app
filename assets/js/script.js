var apiKey = "72dcba6758c0f3fef0a894c324ffa5fc";

function getWeaterApi() {
    var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=" + apiKey;

    fetch(requestUrl).then(function(response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    })
}

getWeaterApi();