$(document).ready(function () {

    // Created array of characters for buttons
    var topics = ["sustainability", "dance", "dogs", "makeup", "game of thrones"]

    // Added characters to buttons 
    startButtons()

    function startButtons() {

        for (var i = 0; i < topics.length; i++) {
            var btn = $("<button>");
            btn.addClass("things");
            btn.attr("data-name", topics[i]);
            btn.text(topics[i]);
            $("#buttons").append(btn);
        }
    }

    $("button").on("click", function () {
        var topics = $(this).attr("data-name");
        // API and AJAX call for data 
        function displayTopic() {
            var topicArr = $(this).attr("data-name");

            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topicArr + "&api_key=RWcQa96VrWKmA6zE8cwvGroz4LEmqB8j&limit=10";

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

                            var topicImage = $("<img>");

                            topicImage.attr("src", results[i].images.fixed_height.url);

                            gifs.append(p);
                            gifs.append(topicImage);

                            $("#gifImages").prepend(gifs);
                        }
                    }
                });
            }

        // look at the response in the console
        // create a variable called rating and save the response.rating
        // prepend to id = "gifImages});
        // jQuery onclick for the button
    })});
