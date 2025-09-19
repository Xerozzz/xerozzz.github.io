const weather_type_images = {
  Clear: "images/clear.jpg",
  Clouds: "images/clouds.jpg",
  Haze: "images/haze.jpg",
  Mist: "images/mist.jpg",
  Rain: "images/rain.jpg",
  Smoke: "images/smoke.jpg",
  Snow: "images/snow.jpg",
  Thunderstorm: "images/thunderstorm.jpg",
};

const temp_images = {
  Hot: "images/hot.jpg", // Celsius > 25
  Okay: "images/okay.jpg", // Celsius 5-25
  Cold: "images/cold.jpg", // Celsius < 5
};

// DO NOT CHANGE THE FUNCTION SIGNATURE
function check_weather() {
  console.log("=== [START] check_weather() ===");

  //============================================================================
  // Task 1
  // Key in your own OpenWeatherMap.org API key (DO NOT SHARE IT WITH OTHERS)
  //============================================================================
  const weather_api_key = "67c1c67e7b0201da7e5952354d116e01";

  //============================================================================
  // Task 2
  // Retrieve the user input (city name) from <input>
  //============================================================================
  const city = document.getElementById("city").value; // Default value, you need to replace this string with actual user input

  // DO NOT MODIFY THIS
  let api_endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}&units=metric`;

  axios
    .get(api_endpoint)
    .then((response) => {
      // Inspect what's in the API response
      console.log(response.data);
      var data = response.data;
      var weather_images = document.getElementById("weather_images");
      var temperature_image = document.getElementById("temperature_image");
      //============================================================================
      // Task 3
      // Retrieve the weather info (e.g. Rain, Clouds, etc.)
      //============================================================================
      var temperature = data.main.temp;
      if (temperature > 25) {
        var def = "Hot";
      } else if (temperature < 5) {
        var def = "Cold";
      } else {
        var def = "Okay";
      }
      temperature_image.src = temp_images[def];
      weather_images.innerHTML = "";
      for (i of data.weather) {
        var img = document.createElement("img");
        img.src = weather_type_images[i.main];
        weather_images.appendChild(img);
      }
      // YOUR CODE GOES HERE
      // Make use of const weather_type_images (at the top)

      //======================================================================================
      // Task 4
      // Perform JavaScript DOM to reflect weather info and temperature info in the HTML page.
      //======================================================================================

      // YOUR CODE GOES HERE
      // Make use of const temp_images (at the top)
    })
    .catch((error) => {
      console.log(error.message);
    });

  console.log("=== [END] check_weather() ===");
}
