
function getCocktailApi() {
  var cocktailAPI = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  fetch(cocktailAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var drinkArray = data.drinks[0];

      console.log(data);
      console.log(drinkArray.strDrink);
      console.log(drinkArray.strInstructions);

      var drinksIngredients = [];

      for (let i = 1; i <= 15; i++) {
        const ingredient = drinkArray["strIngredient" + i];
        const measure = drinkArray["strMeasure" + i];

        if (ingredient && measure) {
          drinksIngredients.push({ ingredient, measure });
        }
      }

      console.log(drinksIngredients);
      console.log(drinkArray.strDrinkThumb);
    });
}

getCocktailApi();




function getMealApi() {
  var mealApi = "https://www.themealdb.com/api/json/v1/1/random.php";
fetch(mealApi)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  var mealArray = data.meals[0];

  console.log(data);
  console.log(mealArray.strMeal);
  console.log(mealArray.strInstructions);

  var mealIngredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = mealArray["strIngredient" + i];
    const measure = mealArray["strMeasure" + i];

    if (ingredient && measure) {
      mealIngredients.push({ ingredient, measure });
    }
  }

  console.log(mealIngredients);
  console.log(mealArray.strMealThumb);
});
}

getMealApi();


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


