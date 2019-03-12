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
            console.log(results);
           
            for (var i = 0; i < results.length; i++) {
                var still = results[i].images.fixed_height_still.url
                var animate = results[i].images.fixed_height.url
                var topicImage = $("<img>");
                topicImage.attr("src", still);
                topicImage.attr("data-state", "still");
                topicImage.attr("data-animate", animate);
                topicImage.attr("data-still", still);
                topicImage.addClass("pic")
                // gifs.append(p);
                $("#gifImages").append(topicImage);
                // $("#gifImages").prepend(gifs);
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
    // Dynamically create gif div
                var gifs = $("<div>");
    
            // Creating rating and adding the text
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                $("#gifImages").append(p);
            
            }
        }
            // When data comes back from API
    });          
            
});
$(document).on("click", ".pic", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
    

                    //loop through the results and display the images just like the buttons
            
            
           


            
            
// // Looping over results
                    





// setting rating 
//                         
                            // Taking the imagin and storing in div, then giving attr of fixed height
                            

                    // appending image to div
                            
                // prepending image to html div 
                           

})              