var main = (function () {
    "use strict";
    var ctwitter = window.ctwitter, main,
        $ = window.$,
        console = window.console,
        twitter = new ctwitter.CTwitter(),
        search = $("#user_input").val();
    twitter.stream("statuses/filter", { lang: "en", track: ["search"] }, function (stream) {
        stream.on("data", function (tweet) {
              //$("#tweets").append("<img src='"+tweet.profile_image_url+"' />");
            $("<p>"  + tweet.text + "</p>")
            tweet.hide();
            $("#tweets").append(tweet);
            console.log(tweet.text);
            tweet.fadeIn(5000);
            tweet.fadeOut(5000);
            tweet.slideUp();
        });
    });
}());
var document = window.document;

document.ready(main);