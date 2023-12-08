//API for yelp

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer WrsNmnOdmTrlPocLosX8oMYhWXd3iZLTlz2NUkekcC94AdSYGQctfpbSGlJPOG2mvyWmXFIJVJBgdQxXzNMIztYgbjhyGbJaGPqPHFVwYRTwOMbAtGXWFHuGPepwZXYx",
//   },
// };

// fetch(
//   "https://api.yelp.com/v3/businesses/search?location=Denver&sort_by=best_match&limit=20",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

//API for Location

function displayData() {
  $(".weatherForecast").show();
  $(".container1").show();
  var displayImage = "assets/cow-rotate.gif";
  // $(".img1").css({ background: "url(" + displayImage + ")" });
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
displayData();
