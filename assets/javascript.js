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
        
        startButtons(topics, "gif-button", "#buttons");
        
// API and AJAX call for data 
        $(document).on("click", ".gif-button", function (){
            $("#gifImages").empty();
            var topic = $(this).attr("data-name");

            var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=RWcQa96VrWKmA6zE8cwvGroz4LEmqB8j&q=" + topic + "&limit=10&offset=0&rating=G&lang=en";

            $.ajax({
                url: queryURL,
                method: "GET",
            }).then(function (response) {
                
           // Storing array of results in results variable 
            var results = response.data;
            console.log(response);

            for (var i = 0; i < results.length; i++) {
                    
                var topicImage = $("<img>");
                topicImage.attr("src", results[i].images.fixed_height.url);
                // gifs.append(p);
                $("#gifImages").append(topicImage);
                // $("#gifImages").prepend(gifs);
            }
        })
            // When data comes back from API
        });          
            
    });
    
    

                    //loop through the results and display the images just like the buttons
            
            
           


            
            
// // Looping over results
                    





// setting rating 
//                         if (results[i].rating === "r" && results[i].rating === "pg-13" && results[i].rating === "pg") {
//                 // Dynamically create gif div
//                             var gifs = $("<div>");
//                 // Creating rating and adding the text
                            //  var rating = results[i].rating;
                            //  var p = $("<p>").text("Rating: " + rating);
                            // Taking the imagin and storing in div, then giving attr of fixed height
                            

                    // appending image to div
                            
                // prepending image to html div 
                           

                