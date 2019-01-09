
require('dotenv').load();

const Twitter = require('twitter');
const fs      = require('fs');  


const client  = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    bearer_token: process.env.TWITTER_BEARER_TOKEN
  });

/* Querying the twitter API  tweets json results and return the tweet Object array as:
    [
        {
            "text": "text",
            "created_at": "date"
        },
        ...
    ]
*/
function getTweets(query){
    var params = {
        "query": `"${query}" lang:he`,
    }

    console.log('Enter getTweets(), query: ' + query);
    const tweetArray = [];
    return new Promise((resulve, reject)=>{
        client.get('tweets/search/30day/30daysHebrewtweets.json', params, function(error, tweets, response) {
            console.log(tweets)
            if(tweets.results){
                tweets.results.forEach(function(tweet) {
                    console.log('--->>>' + tweet.text);
                    /* Push tweet item to tweets array */
                    tweetArray.push({
                        text: tweet.text,
                        created_at: tweet.created_at
                    })
                }) 
                if(tweetArray.length > 0){
                    /* Resulve the promise with tweetArray */
                    resulve(tweetArray);
                }
                else{
                    reject('Empty Results');
                }
            }
        })
    }).catch(err=>{console.log(err)})
}

function getTweetsSetTimeOut(query){
    var params = {
        "query": `"${query}" lang:he`,
        "fromDate": 201212220000,
        "toDate":   201812310000
    }

    console.log('Enter getTweets(), query: ' + query);
    const tweetArray = [];
    return new Promise((resulve, reject)=>{
        setTimeout(()=>{
            client.get('tweets/search/fullarchive/TVshows.json', params, function(error, tweets, response) {
                console.log(tweets)
                if(tweets.results){
                    tweets.results.forEach(function(tweet) {
                        console.log('--->>>' + tweet.text);
                        /* Push tweet item to tweets array */
                        tweetArray.push({
                            text: tweet.text,
                            created_at: tweet.created_at
                        })
                    }) 
                    if(tweetArray.length > 0){
                        /* Resulve the promise with tweetArray */
                        resulve(tweetArray);
                    }
                    else{
                        reject('Empty Results');
                    }
                }
            })
        },2000)
    }).catch(err=>{console.log(err)})
}

/* the function get->sentences array from stop list and search for each item int the array if there for the "text" tweets and return sentences Object array as: 
    "sentences": [
            {
                "sentence" : "text",
                "tweets": []
            },
            ... ]
*/
async function getSentence(sentencesArray){
    const sentecesArray = [];
    
    console.log('Enter getSentence()' + sentencesArray)
    for (const item of sentencesArray) {
            let sentenceArrayItem = {
                sentence : "",
                tweets: []
            }   
            /* Set sentence text: "" */
            sentenceArrayItem.sentence = item.text;
            const asyncResult = await getTweetsSetTimeOut(item.text); 
            sentenceArrayItem.tweets.push(asyncResult);
            sentecesArray.push(sentenceArrayItem);
    }
    console.log('After getSentence() main loop: ' + sentecesArray);
    return new Promise(resulve=>{
        resulve(sentecesArray)
    })
}

module.exports = {
    getSentence: getSentence
}


