
function getCocktailApi() {
  var cocktailAPI = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  fetch(cocktailAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.drinks[0].strDrink, data.drinks[0].strIngredient1, data.drinks[0].strIngredient2);
      

    });
}

getCocktailApi();

function displayData() {
  $(".weatherForecast").show();
  $(".container1").show();
  var displayImage = "assets/cow-rotate.gif";
  $(".img1").attr("src", displayImage);

  $(".today").empty();
  //title
  $(".col1")
    .children("div")
    .children("div")
    .children("div")
    .children("span")
    .text("beans");
  //delivery or reserve
  $(".col1")
    .children("div")
    .children("div")
    .children("div")
    .children("small")
    .append("<p>" + "beans" + "<div />" + "beans" + "</p>");
}

function getMealApi() {
  var mealApi = "https://www.themealdb.com/api/json/v1/1/random.php";

  fetch(mealApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.meals[0].strMeal);
    });
}
getMealApi();
