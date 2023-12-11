var mealObj;
var ingredientInput;
var mealID;

var mealArray;
var drinkArray;
$(".col2").hide();
$(".col1").hide();
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

$("#searchBtn").on("click", searchRecipes);
$("#random").on("click", getRandomMealApi);
$("#random").on("click", getCocktailApi);

function searchRecipes() {
  ingredientInput = $(this).siblings(".form-control").val();
  console.log(ingredientInput);

  if (ingredientInput.trim() !== "") {
    recipeByIngredient();
  } else {
    console.log("Please enter a valid ingredient");
  }
}

function recipeByIngredient() {
  var mealURL =
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredientInput;
  console.log(mealURL);
  fetch(mealURL)
    .then(function (response) {
      if (!response.ok) {
        alert("Please enter an ingredient or select Suprise Me!");
        throw respone.json();
      }
      return response.json();
    })
    .then(function (data) {
      var mealNumber = Math.floor(Math.random() * data.meals.length);
      mealObj = data;
      mealID = data.meals[mealNumber].idMeal;
      console.log(mealObj);
      getMealApi();
      getCocktailApi();
    });
}

function getMealApi() {
  var mealApi =
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID;
  console.log(mealApi);
  fetch(mealApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      mealArray = data.meals[0];
      displayMealData();
    });
}

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
}
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
