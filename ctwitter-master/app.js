var main = function () {
    console.log("hello world");
  
    var twitter = new ctwitter.CTwitter();
    twitter.stream("statuses/filter", { lang:"en", track:["input"] }, function (stream) {
        stream.on("data", function (tweet) {
              //$("#tweets").append("<img src='"+tweet.profile_image_url+"' />");
             var tweet = $("<p>"+tweet.text+"</p>") 
            tweet.hide();
              $("#tweets").append(tweet);
              console.log(tweet.text);
               tweet.fadeIn(5000);
                tweet.fadeOut(5000);
                  tweet.slideUp();
                
        });
    });
}


$(document).ready(main);