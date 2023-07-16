// selector for search button
var searchBtn = document.querySelector('#sbtn');
var savedSearches = document.querySelector('#previous');
// api key
var apiKey = 'd06c614cd8de208c5d08d01ece9a659b';
// variables for current weather
var currentLocation = document.querySelector('#currentTitle');
var currentIcon = document.querySelector('#currentIcon');
var currentTemp = document.querySelector('#currentTemp');
var currentWind = document.querySelector('#currentWind');
var currentHumidity = document.querySelector('#currentHumidity');
// variables for day 1 of weather forecast
var day1Date = document.querySelector('#day1Date');
var day1Icon = document.querySelector('#day1Icon');
var day1Temp = document.querySelector('#day1Temp');
var day1Wind = document.querySelector('#day1Wind');
var day1Humidity = document.querySelector('#day1Humidity');
// variables for day 2 of weather forecast
var day2Date = document.querySelector('#day2Date');
var day2Icon = document.querySelector('#day2Icon');
var day2Temp = document.querySelector('#day2Temp');
var day2Wind = document.querySelector('#day2Wind');
var day2Humidity = document.querySelector('#day2Humidity');
// variables for day 3 of weather forecast
var day3Date = document.querySelector('#day3Date');
var day3Icon = document.querySelector('#day3Icon');
var day3Temp = document.querySelector('#day3Temp');
var day3Wind = document.querySelector('#day3Wind');
var day3Humidity = document.querySelector('#day3Humidity');
// variables for day 4 of weather forecast
var day4Date = document.querySelector('#day4Date');
var day4Icon = document.querySelector('#day4Icon');
var day4Temp = document.querySelector('#day4Temp');
var day4Wind = document.querySelector('#day4Wind');
var day4Humidity = document.querySelector('#day4Humidity');
// variables for day 5 of weather forecast
var day5Date = document.querySelector('#day5Date');
var day5Icon = document.querySelector('#day5Icon');
var day5Temp = document.querySelector('#day5Temp');
var day5Wind = document.querySelector('#day5Wind');
var day5Humidity = document.querySelector('#day5Humidity');

// event listener on search button that fetches api and renders results
searchBtn.onclick = async function() {
    while(currentIcon.firstChild) {
        currentIcon.firstChild.remove();
        day1Icon.firstChild.remove();
        day2Icon.firstChild.remove();
        day3Icon.firstChild.remove();
        day4Icon.firstChild.remove();
        day5Icon.firstChild.remove();
    }
    var userInput = document.getElementById('search').value;

    var currentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=imperial`);
    var currentWeatherJson = await currentWeather.json();
    var today = currentWeatherJson;
    console.log(currentWeatherJson);


    var forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=${apiKey}&units=imperial`);
    var forecastJson = await forecast.json();
    var day1 = forecastJson.list[2];
    var day2 = forecastJson.list[10];
    var day3 = forecastJson.list[18];
    var day4 = forecastJson.list[26];
    var day5 = forecastJson.list[34];
    console.log(forecastJson.list[2]);
    console.log(forecastJson.list[10]);
    console.log(forecastJson.list[18]);
    console.log(forecastJson.list[26]);
    console.log(forecastJson.list[34]);

    renderCurrent(today);
    renderDay1(day1);
    renderDay2(day2);
    renderDay3(day3);
    renderDay4(day4);
    renderDay5(day5);

    saveSearch(userInput);
} 
// renders current day weather
function renderCurrent(today) {
    currentLocation.innerText = today.name;
    var img = new Image()
    img.src = `http://openweathermap.org/img/w/${today.weather[0].icon}.png`;
    currentIcon.appendChild(img);
    // currentIcon.innerText = today.weather[0].icon;
    currentTemp.innerText = "Temp: " + today.main.temp + "°F";
    currentWind.innerText = "Wind: " + today.wind.speed + "mph";
    currentHumidity.innerText = "Humidity: " + today.main.humidity + "%";
}
// renders day 1 of weather forecast
function renderDay1(day1) {
    day1Date.innerText = day1.dt_txt;
    var img = new Image()
    img.src = `http://openweathermap.org/img/w/${day1.weather[0].icon}.png`;
    day1Icon.appendChild(img);
    // day1Icon.innerText = day1.weather[0].icon;
    day1Temp.innerText = "Temp: " + day1.main.temp + "°F";
    day1Wind.innerText = "Wind: " + day1.wind.speed + "mph";
    day1Humidity.innerText = "Humidity: " + day1.main.humidity + "%";
 }
// renders 2 of weather forecast
 function renderDay2(day2) {
    day2Date.innerText = day2.dt_txt;
    var img = new Image()
    img.src = `http://openweathermap.org/img/w/${day2.weather[0].icon}.png`;
    day2Icon.appendChild(img);
    // day2Icon.innerText = day2.weather[0].icon;
    day2Temp.innerText = "Temp: " + day2.main.temp + "°F";
    day2Wind.innerText = "Wind: " + day2.wind.speed + "mph";
    day2Humidity.innerText = "Humidity: " + day2.main.humidity + "%";
 }
// renders 3 of weather forecast
 function renderDay3(day3) {
    day3Date.innerText = day3.dt_txt;
    var img = new Image()
    img.src = `http://openweathermap.org/img/w/${day3.weather[0].icon}.png`;
    day3Icon.appendChild(img);
    // day3Icon.innerText = day3.weather[0].icon;
    day3Temp.innerText = "Temp: " + day3.main.temp + "°F";
    day3Wind.innerText = "Wind: " + day3.wind.speed + "mph";
    day3Humidity.innerText = "Humidity: " + day3.main.humidity + "%";
 }
// renders 4 of weather forecast
 function renderDay4(day4) {
    day4Date.innerText = day4.dt_txt;
    var img = new Image()
    img.src = `http://openweathermap.org/img/w/${day4.weather[0].icon}.png`;
    day4Icon.appendChild(img);
    // day4Icon.innerText = day4.weather[0].icon;
    day4Temp.innerText = "Temp: " + day4.main.temp + "°F";
    day4Wind.innerText = "Wind: " + day4.wind.speed + "mph";
    day4Humidity.innerText = "Humidity: " + day4.main.humidity + "%";
 }
// renders 5 of weather forecast
 function renderDay5(day5) {
    day5Date.innerText = day5.dt_txt;
    var img = new Image()
    img.src = `http://openweathermap.org/img/w/${day5.weather[0].icon}.png`;
    day5Icon.appendChild(img);
    // day5Icon.innerText = day5.weather[0].icon;
    day5Temp.innerText = "Temp: " + day5.main.temp + "°F";
    day5Wind.innerText = "Wind: " + day5.wind.speed + "mph";
    day5Humidity.innerText = "Humidity: " + day5.main.humidity + "%";
 }

 function saveSearch(city) {

   var existingSearch = savedSearches.getElementsByTagName('li');
   for (var i = 0; i < existingSearch.length; i++) {
      if (existingSearch[i].innerText === city) {
         return;
      }
   }

   var listItem = document.createElement('li');
   listItem.innerText = city;
   savedSearches.appendChild(listItem);
   listItem.addEventListener('click', function () {
      document.getElementById('search').value = city;
      searchBtn.click();
   });
 }
 



