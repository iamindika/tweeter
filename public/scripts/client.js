/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = function(tweetArray) {
  for (const tweetObj of tweetArray) {
    const $tweet = createTweetElement(tweetObj);
    $('#tweets').prepend($tweet);
  }
}

const createTweetElement = function(tweetData) {
   const $tweet = $(`
          <article class="tweet">
          <header>
            <div class="user-container">
              <img class="profile-icon-small" src=${tweetData.user.avatars}/>
              <p class="last-name">${tweetData.user.name}</p>
            </div>
            <p class="handle">${tweetData.user.handle}</p>
          </header>
          <p>${tweetData.content.text}</p>
          <footer>
            <p class="date">${tweetData['created_at']}</p>
            <div>
              <img src="./images/icons/icons8-flag-filled-24.png" />
              <img src="./images/icons/icons8-retweet-24.png"/>
              <img src="./images/icons/icons8-heart-24.png" />
            </div>
          </footer>
        </article>
        `);
        return $tweet;
};

$(document).ready(function(){

  const loadTweets = function () {
    $.ajax('/tweets', {method: 'GET'})
    .then(function(moreTweets) {
      renderTweets(moreTweets);
    });  
  };

   loadTweets();

  $('.form-tweet').submit(function(event) {
    event.preventDefault();

    $.ajax({
      type: "POST", 
      url: '/tweets',  
      data: $(this).serialize() 
    })
    .then(function(){
      $('#tweets').empty();
      loadTweets();
    });
    
  });
});

