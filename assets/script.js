//API for yelp

const options = {
     method: 'GET',
     headers: {
       accept: 'application/json',
       Authorization: 'Bearer WrsNmnOdmTrlPocLosX8oMYhWXd3iZLTlz2NUkekcC94AdSYGQctfpbSGlJPOG2mvyWmXFIJVJBgdQxXzNMIztYgbjhyGbJaGPqPHFVwYRTwOMbAtGXWFHuGPepwZXYx'
     }
   };
   
   fetch('https://api.yelp.com/v3/businesses/search?location=Denver&sort_by=best_match&limit=20')
     .then(response => response.json())
     .then(response => console.log(response))
     .catch(err => console.error(err));

//API for Location

function displayData() {
  $(".weatherForecast").show();
  $(".container1").show();
  var displayImage = "http://www.w3.org/2000/svg";

  $(".today").empty();

  $(".col1").children("div").children("svg").children("text").text("beans");
}
displayData();
