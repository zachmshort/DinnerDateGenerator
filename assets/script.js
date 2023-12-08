function getMealApi() {
   var mealApi = "https://www.themealdb.com/api/json/v1/1/random.php";

   fetch(mealApi)
   .then(function (response) {
      return response.json();
   })
   .then(function(data) {
      console.log(data)
      console.log(data.meals[0].strMeal)
      console.log(data.meals[0].strInstructions)
   })
}
getMealApi()