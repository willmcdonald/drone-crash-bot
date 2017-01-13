var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);

var retweet = function() {
  var params = {
    q: 'drone crash',
    lang: 'en'
  }

  Twitter.get('search/tweets', params, function(err, data) {

        if (!err) {

            var retweetId = data.statuses[0].id_str;

            Twitter.post('statuses/retweet/:id', {
                id: retweetId
            }, function(err, response) {
                if (response) {
                    console.log(response);
                }
                if (err) {
                    console.log('Error retweeting. Already retweeted.');
                }
            });
        }
    });
}


retweet();
// retweet every 5 minutes
setInterval(retweet, 300000);
