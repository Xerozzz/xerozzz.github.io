/* Task 6 - API call */
function get_all_drinks() {
  console.log("[START] get_all_drinks()");
  var category = dropdown.value;
  var alcohol = alcoholic.value;
  var searchValue = searchElem.value;
  console.log(searchValue);

  if (category == "" && alcohol == "" && searchValue == "") {
    var api_endpoint_url = "http://localhost/DrinksAPI/api/drink/read.php"; // local file
  } else if (category != "" && alcohol != "" && searchValue != "") {
    var api_endpoint_url = `http://localhost/DrinksAPI/api/drink/search.php?c=${category.toLowerCase()}&a=${alcohol.toLowerCase()}&n=${searchValue.toLowerCase()}`;
  } else if (category != "" && alcohol != "") {
    var api_endpoint_url = `http://localhost/DrinksAPI/api/drink/search.php?c=${category.toLowerCase()}&a=${alcohol.toLowerCase()}`;
  } else if (category != "" && searchValue != "") {
    var api_endpoint_url = `http://localhost/DrinksAPI/api/drink/search.php?c=${category.toLowerCase()}&n=${searchValue.toLowerCase()}`;
  } else if (searchValue != "" && alcohol != "") {
    var api_endpoint_url = `http://localhost/DrinksAPI/api/drink/search.php?n=${searchValue.toLowerCase()}&a=${alcohol.toLowerCase()}`;
  } else if (alcohol != "") {
    var api_endpoint_url = `http://localhost/DrinksAPI/api/drink/search.php?a=${alcohol.toLowerCase()}`;
  } else if (category != "") {
    var api_endpoint_url = `http://localhost/DrinksAPI/api/drink/search.php?c=${category.toLowerCase()}`;
  } else if (searchValue != "") {
    var api_endpoint_url = `http://localhost/DrinksAPI/api/drink/search.php?n=${searchValue.toLowerCase()}`;
  }

  axios
    .get(api_endpoint_url)
    .then((response) => {
      console.log("Axios call completed successfully!");
      let section_results = document.getElementById("results");
      section_results.innerHTML = "";
      // Build a string of Bootstrap cards
      let result_str = ``;
      let drinks_array = response.data.records; // Array of drink objects
      console.log(drinks_array); // Array of drink objects

      // Task 4 - Display Drinks
      //   Each drink is a Bootstrap card
      // Replace all the hard-coded strings with actual values as read from the JSON file
      for (let drink of drinks_array) {
        result_str += `
                <div class="col">
                    <div class="card h-100">
                        <img src="/DrinksAPI/${drink.photo_url}" 
                             class="card-img-top"
                             alt="${drink.name}">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${drink.name}
                            </h5>
                            <p class="card-text small text-muted mb-0">
                                ${drink.category} • ${drink.alcoholic}
                            </p>
                        </div>
                    </div>
                </div>
            `;
      }

      // Inject the cards into the #results section
      section_results.innerHTML = result_str;
    })
    .catch((error) => {
      console.log(error.message);

      // Task 5 - Data can't be loaded, display alert
      //   "Failed to load drinks data."
      // YOUR CODE GOES HERE
      var alerts = document.getElementById("alerts");
      alerts.innerHTML = `
        <div class="mb-4 alert alert-danger" role="alert">
            Failed to load drinks data            
        </div>`;
    });

  console.log("[END] get_all_drinks()");
}

/* Task 7 - Category Dropdown Menu */
function populate_category_dropdown() {
  console.log("[START] populate_category_dropdown()");

  const api_endpoint_url = "http://localhost/DrinksAPI/api/drink/category.php"; // API endpoint
  axios
    .get(api_endpoint_url)
    .then((response) => {
      console.log("Axios call completed successfully!");

      // YOUR CODE GOES HERE
      var data = response.data.records;
      for (i of data) {
        var option = document.createElement("option");
        option.value = i;
        option.appendChild(document.createTextNode(i));
        dropdown.appendChild(option);
      }
      console.log("Dropdown populated!");
    })
    .catch((error) => {
      console.log(error.message);
    });

  console.log("[END] populate_category_dropdown()");
}

/* Task 8 - Category Dropdown Event Listener */
var dropdown = document.getElementById("category");
dropdown.addEventListener("change", get_all_drinks);
/* Task 9 - Alcoholic Dropdown Event Listener */
var alcoholic = document.getElementById("alcoholic");
alcoholic.addEventListener("change", get_all_drinks);
/* Task 10 - Name search input Event Listener */
var searchElem = document.getElementById("name_search");
searchElem.addEventListener("input", get_all_drinks);
// DO NOT MODIFY THE BELOW LINES
get_all_drinks();
populate_category_dropdown();
