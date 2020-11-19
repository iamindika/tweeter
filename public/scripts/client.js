/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweetArray) {
  for (const tweetObj of tweetArray) {
    const $tweet = createTweetElement(tweetObj);
    $('#tweets').append($tweet);
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


// // Test / driver code (temporary)

$(document).ready(function(){
  renderTweets(data);
});

