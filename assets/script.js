function getCocktailApi() {
    var cocktailAPI = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    fetch(cocktailAPI)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        console.log(data.drinks[0].strDrink)
      
      })
      
    }

getCocktailApi();