//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
    key: "b04ba6fac6bbbf28b46d69605c0bb60b",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather?"
}
//b04ba6fac6bbbf28b46d69605c0bb60

//Event Listner Function on keypress
const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

//show weather report
function showWeatherReport(weather) {
    console.log(weather);
}

//date manage
