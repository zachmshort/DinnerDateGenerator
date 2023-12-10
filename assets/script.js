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

// function getMealApi() {
//   var mealApi = "https://www.themealdb.com/api/json/v1/1/random.php";

//   fetch(mealApi)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       console.log(data.meals[0].strMeal);
//       console.log(data.meals[0].strInstructions);
//       console.log(data.meals[0].strIngredient1, data.meals[0].strMeasure1);
//       console.log(data.meals[0].strIngredient2, data.meals[0].strMeasure2);
//       console.log(data.meals[0].strIngredient3, data.meals[0].strMeasure3);
//       console.log(data.meals[0].strIngredient4, data.meals[0].strMeasure4);
//       console.log(data.meals[0].strIngredient5, data.meals[0].strMeasure5);
//       console.log(data.meals[0].strIngredient6, data.meals[0].strMeasure6);
//       console.log(data.meals[0].strIngredient7, data.meals[0].strMeasure7);
//       console.log(data.meals[0].strIngredient8, data.meals[0].strMeasure8);
//       console.log(data.meals[0].strIngredient9, data.meals[0].strMeasure9);
//       console.log(data.meals[0].strIngredient10, data.meals[0].strMeasure10);
//       console.log(data.meals[0].strIngredient11, data.meals[0].strMeasure11);
//       console.log(data.meals[0].strIngredient12, data.meals[0].strMeasure12);
//       console.log(data.meals[0].strIngredient13, data.meals[0].strMeasure13);
//       console.log(data.meals[0].strIngredient14, data.meals[0].strMeasure14);
//       console.log(data.meals[0].strIngredient15, data.meals[0].strMeasure15);
//       console.log(data.meals[0].strIngredient16, data.meals[0].strMeasure16);
//       console.log(data.meals[0].strIngredient17, data.meals[0].strMeasure17);
//       console.log(data.meals[0].strIngredient18, data.meals[0].strMeasure18);
//       console.log(data.meals[0].strIngredient19, data.meals[0].strMeasure19);
//       console.log(data.meals[0].strIngredient20, data.meals[0].strMeasure20);
//       console.log(data.meals[0].strMealThumb);
//     });
// }
// getMealApi();
function getMealApi() {
  var mealApi = "https://www.themealdb.com/api/json/v1/1/random.php";

  fetch(mealApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.meals[0].strMeal);
      console.log(data.meals[0].strInstructions);
      console.log(data.meals[0].strIngredient1, data.meals[0].strMeasure1);
      console.log(data.meals[0].strIngredient2, data.meals[0].strMeasure2);
      console.log(data.meals[0].strIngredient3, data.meals[0].strMeasure3);
      console.log(data.meals[0].strIngredient4, data.meals[0].strMeasure4);
      console.log(data.meals[0].strIngredient5, data.meals[0].strMeasure5);
      console.log(data.meals[0].strIngredient6, data.meals[0].strMeasure6);
      console.log(data.meals[0].strIngredient7, data.meals[0].strMeasure7);
      console.log(data.meals[0].strIngredient8, data.meals[0].strMeasure8);
      console.log(data.meals[0].strIngredient9, data.meals[0].strMeasure9);
      console.log(data.meals[0].strIngredient10, data.meals[0].strMeasure10);
      console.log(data.meals[0].strIngredient11, data.meals[0].strMeasure11);
      console.log(data.meals[0].strIngredient12, data.meals[0].strMeasure12);
      console.log(data.meals[0].strIngredient13, data.meals[0].strMeasure13);
      console.log(data.meals[0].strIngredient14, data.meals[0].strMeasure14);
      console.log(data.meals[0].strIngredient15, data.meals[0].strMeasure15);
      console.log(data.meals[0].strIngredient16, data.meals[0].strMeasure16);
      console.log(data.meals[0].strIngredient17, data.meals[0].strMeasure17);
      console.log(data.meals[0].strIngredient18, data.meals[0].strMeasure18);
      console.log(data.meals[0].strIngredient19, data.meals[0].strMeasure19);
      console.log(data.meals[0].strIngredient20, data.meals[0].strMeasure20);
      console.log(data.meals[0].strMealThumb);
    });
}
getMealApi();
