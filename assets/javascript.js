$(document).ready(function () {

    // Created array of characters for buttons
    var topics = ["sustainability", "dance", "dogs", "makeup", "game of thrones"]

    // Added my topics to buttons 
    

    function startButtons(arrayAdd, classAdd, placeToPut) {

        for (var i = 0; i < arrayAdd.length; i++) {
            var btn = $("<button>");
            btn.addClass(classAdd);
            btn.attr("data-name", arrayAdd[i]);
            btn.text(arrayAdd[i]);
            $(placeToPut).append(btn);
        }
    }
// Event listener for buttons
    // $("button").on("click", function () {
        // var interests = $(this).attr("data-name");
        
        
// API and AJAX call for data 
        $(document).on("click", ".gif-button", function (){


        
            var topic = $(this).attr("data-name");

            var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=RWcQa96VrWKmA6zE8cwvGroz4LEmqB8j&q=" + topic + "&limit=10&offset=0&rating=G&lang=en";

            $.ajax({
                url: queryURL,
                method: "GET",
            }).then(function (response) {
            // When data comes back from API
                    
            // Storing array of results in results variable 
                    var results = response.data;
                    console.log(response);

                    //loop through the results and display the images just like the buttons
            });
        });
            startButtons(topics, "gif-button", "#buttons");

       
    });

// // Looping over results
//                     for (var i = 0; i < results.length; i++) {
//                 // setting rating 
//                         if (results[i].rating === "r" && results[i].rating === "pg-13" && results[i].rating === "pg") {
//                 // Dynamically create gif div
//                             var gifs = $("<div>");
//                 // Creating rating and adding the text
//                             var rating = results[i].rating;

//                             var p = $("<p>").text("Rating: " + rating);
//                 // Taking the imagin and storing in div, then giving attr of fixed height
//                             var topicImage = $("<img>");

//                             topicImage.attr("src", results[i].images.fixed_height.url);
//                 // appending image to div
//                             gifs.append(p);
//                             gifs.append(topicImage);
//                 // prepending image to html div 
//                             $("#gifImages").prepend(gifs);
//                         }
//                     }
//                 });
//             })

        // look at the response in the console
        // create a variable called rating and save the response.rating
        // prepend to id = "gifImages});
        // jQuery onclick for the button 