$(document).ready(function () {

    // Created array of characters for buttons
    var gameOfThrones = ["Daenerys Targaryen", "Khal Drogo", "Tyrion Lannister", "Tormund Giantsbane", "Cersei Lannister"];

    // Added characters to buttons 
    startButtons()

    function startButtons() {

        for (var i = 0; i < gameOfThrones.length; i++) {
            var btn = $("<button>");
            btn.addClass("people");
            btn.attr("data-name", gameOfThrones[i]);
            btn.text(gameOfThrones[i]);
            $("#buttons").append(btn);
        }
    }

    $("button").on("click", function () {
        var gameOfThrones = $(this).attr("data-name");
        // API and AJAX call for data 
        function displayGOT() {
            var people = $(this).attr("data-name");

            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + people + "&api_key=RWcQa96VrWKmA6zE8cwvGroz4LEmqB8j&limit=10";

            $.ajax({
                url: queryURL,
                method: "GET"
            })
                // When data comes back from API
                .then(function (response) {
                    console.log(response);

                    // Storing array of results in results variable 
                    var results = response.data;
                    // Looping over results
                    for (var i = 0; i < results.length; i++) {
                        // setting rating 
                        if (results[i].rating === "r" && results[i].rating === "pg-13" && results[i].rating === "pg") {
                            // Dynamically create gif div
                            var gifs = $("<div>");

                            var rating = results[i].rating;

                            var p = $("<p>").text("Rating: " + rating);

                            var characterImage = $("<img>");

                            characterImage.attr("src", results[i].images.fixed_height.url);

                            gifs.append(p);
                            gifs.append(characterImage);

                            $("#gifImages").prepend(gifs);
                        }
                    }
                });
            }

        // look at the response in the console
        // create a variable called rating and save the response.rating
        // prepend to id = "gifImages});
        // jQuery onclick for the button;
