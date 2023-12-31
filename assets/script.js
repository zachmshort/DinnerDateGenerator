// Global Variables
var mealObj;
var ingredientInput;
var mealID;
var mealArray;
var drinkArray;
displaySaved();
$(".col2").hide();
$(".col1").hide();

// get random cocktail from thecocktaildb API
function getCocktailApi() {
  var cocktailAPI = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  fetch(cocktailAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      drinkArray = data.drinks[0];
      displayDrinkData();
    });
}

// take user input and format it in a way that the api will understand, and alert user if their input is blank
function searchRecipes() {
  var input = $("#ingredientInput").val();
  $("#ingredientInput").val("");
  ingredientInput = input.split(" ").join("_");
  if (ingredientInput.trim() !== "") {
    recipeByIngredient();
  } else {
    $("#ingredientAlert").removeClass("d-none");
    $("#ingredientAlert .close").on("click", function () {
      $("#ingredientAlert").addClass("d-none");
    });
  }
}

// search for a meal based on user input, and choose a random recipe from the list returned, and alert user if their input is insufficient
function recipeByIngredient() {
  var mealURL =
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredientInput;
  fetch(mealURL)
    .then(function (response) {
      if (!response.ok) {
        throw respone.json();
      }
      return response.json();
    })
    .then(function (data) {
      if (data.meals == null) {
        $("#ingredientAlert").removeClass("d-none");

        $("#ingredientAlert .close").on("click", function () {
          $("#ingredientAlert").addClass("d-none");
        });
      } else {
        var mealNumber = Math.floor(Math.random() * data.meals.length);
        mealObj = data;
        mealID = data.meals[mealNumber].idMeal;
        getMealApi();
        getCocktailApi();
      }
    });
}

// get meal from themealdb API based on meal id from previous function
function getMealApi() {
  var mealApi =
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID;
  fetch(mealApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      mealArray = data.meals[0];
      displayMealData();
      displaySaved();
    });
}

// get a random meal from themealdb API
function getRandomMealApi() {
  var mealApi = "https://www.themealdb.com/api/json/v1/1/random.php";
  fetch(mealApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      mealArray = data.meals[0];
      displayMealData();
    });
}

// display meal data with recipe and instrucions
function displayMealData() {
  $(".col2").show();
  $(".col1").show();
  var displayImage = mealArray.strMealThumb;
  $(".img1").attr("src", displayImage);

  $("#text1").empty();
  //title
  $(".col1")
    .children("div")
    .children("div")
    .children("div")
    .children("span")
    .text(mealArray.strMeal);
  //description.
  var description = $(".col1")
    .children("div")
    .children("div")
    .children("div")
    .children("small");
  description.append("<p>" + mealArray.strInstructions + "</p>");
  // and ingredients
  var ingredientArray = [
    mealArray.strIngredient1,
    mealArray.strIngredient2,
    mealArray.strIngredient3,
    mealArray.strIngredient4,
    mealArray.strIngredient5,
    mealArray.strIngredient6,
    mealArray.strIngredient7,
    mealArray.strIngredient8,
    mealArray.strIngredient9,
    mealArray.strIngredient10,
    mealArray.strIngredient11,
    mealArray.strIngredient12,
    mealArray.strIngredient13,
    mealArray.strIngredient14,
    mealArray.strIngredient15,
    mealArray.strIngredient16,
    mealArray.strIngredient17,
    mealArray.strIngredient18,
    mealArray.strIngredient19,
    mealArray.strIngredient20,
  ];

  var filteredIngredients = ingredientArray.filter(function (el) {
    return el != null;
  });
  var ingredients = filteredIngredients.filter(function (el) {
    return el != " ";
  });
  var measureArray = [
    mealArray.strMeasure1,
    mealArray.strMeasure2,
    mealArray.strMeasure3,
    mealArray.strMeasure4,
    mealArray.strMeasure5,
    mealArray.strMeasure6,
    mealArray.strMeasure7,
    mealArray.strMeasure8,
    mealArray.strMeasure9,
    mealArray.strMeasure10,
    mealArray.strMeasure11,
    mealArray.strMeasure12,
    mealArray.strMeasure13,
    mealArray.strMeasure14,
    mealArray.strMeasure15,
    mealArray.strMeasure16,
    mealArray.strMeasure17,
    mealArray.strMeasure18,
    mealArray.strMeasure19,
    mealArray.strMeasure20,
  ];
  var filteredMeasures = measureArray.filter(function (el) {
    return el != null;
  });
  var measures = filteredMeasures.filter(function (el) {
    return el != " ";
  });
  for (let i = 0; i <= ingredients.length; i++) {
    var ingredient = ingredients[i];
    var measure = measures[i];
    if (ingredient && measure) {
      description.append(ingredient + "; " + measure + "<div />");
    }
  }
  lStorage();
}

// display drink data with recipe and instructions
function displayDrinkData() {
  var displayImage = drinkArray.strDrinkThumb;
  $(".img2").attr("src", displayImage);
  $("#text2").empty();
  //title
  $(".col2")
    .children("div")
    .children("div")
    .children("div")
    .children("span")
    .text(drinkArray.strDrink);
  //description
  var description = $(".col2")
    .children("div")
    .children("div")
    .children("div")
    .children("small");
  description.append("<p>" + drinkArray.strInstructions + "</p>");
  // and ingredients
  var ingredientArray = [
    drinkArray.strIngredient1,
    drinkArray.strIngredient2,
    drinkArray.strIngredient3,
    drinkArray.strIngredient4,
    drinkArray.strIngredient5,
    drinkArray.strIngredient6,
    drinkArray.strIngredient7,
    drinkArray.strIngredient8,
    drinkArray.strIngredient9,
    drinkArray.strIngredient10,
    drinkArray.strIngredient11,
    drinkArray.strIngredient12,
    drinkArray.strIngredient13,
    drinkArray.strIngredient14,
    drinkArray.strIngredient15,
  ];

  var filteredIngredients = ingredientArray.filter(function (el) {
    return el != null;
  });
  var ingredients = filteredIngredients.filter(function (el) {
    return el != " ";
  });
  var measureArray = [
    drinkArray.strMeasure1,
    drinkArray.strMeasure2,
    drinkArray.strMeasure3,
    drinkArray.strMeasure4,
    drinkArray.strMeasure5,
    drinkArray.strMeasure6,
    drinkArray.strMeasure7,
    drinkArray.strMeasure8,
    drinkArray.strMeasure9,
    drinkArray.strMeasure10,
    drinkArray.strMeasure11,
    drinkArray.strMeasure12,
    drinkArray.strMeasure13,
    drinkArray.strMeasure14,
    drinkArray.strMeasure15,
  ];
  var filteredMeasures = measureArray.filter(function (el) {
    return el != null;
  });
  var measures = filteredMeasures.filter(function (el) {
    return el != " ";
  });
  for (let i = 0; i <= ingredients.length; i++) {
    var ingredient = ingredients[i];
    var measure = measures[i];
    if (ingredient && measure) {
      description.append(ingredient + "; " + measure + "<div />");
    }
  }
}

// storage function
function lStorage() {
  var savedIngredient = JSON.parse(localStorage.getItem("ingredient")) || [];
  savedIngredient.push({ ingredient: mealArray.strMeal, recipe: mealID });
  localStorage.setItem("ingredient", JSON.stringify(savedIngredient));
}
// display last 5 saved items
function displaySaved() {
  $("#savedSearches").empty();
  var saved = JSON.parse(localStorage.getItem("ingredient")) || [];
  saved.slice(-5).forEach((entry) => {
    $("#savedSearches").append(
      '<li value="' + entry.recipe + '">' + entry.ingredient + "</li>"
    );
    $($("#savedSearches").children()).addClass("button");
  });
  $(".button").on("click", clickHandler);
}

// search meal by id of clicked search history item
function clickHandler() {
  mealID = $(this).attr("value");
  getMealApi();
  getCocktailApi();
}

// event listeners
$(document).on("keypress", "input", function (e) {
  if (e.which == 13) {
    searchRecipes();
  }
});
$("#searchBtn").on("click", searchRecipes);
$("#random").on("click", getRandomMealApi);
$("#random").on("click", getCocktailApi);
