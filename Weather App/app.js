
const apiKey = "6cf21cb4a438e7380284c9baaa7758c4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found");
            return;
        }

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        const weatherMain = data.weather[0].main.toLowerCase();
        switch (weatherMain) {
            case "clouds":
                weatherIcon.src = "assets/clouds.png";
                break;
            case "clear":
                weatherIcon.src = "assets/clear.png";
                break;
            case "drizzle":
                weatherIcon.src = "assets/drizzle.png";
                break;
            case "mist":
                weatherIcon.src = "assets/mist.png";
                break;
            case "rain":
                weatherIcon.src = "assets/rain.png";
                break;
            case "haze":
                weatherIcon.src = "assets/haze.png";
                break;
            default:
                weatherIcon.src = "assets/default.png"; // Set a default icon for other weather types
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }

    document.querySelector(".weather").style.display="block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
