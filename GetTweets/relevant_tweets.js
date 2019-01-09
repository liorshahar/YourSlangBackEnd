const stopList    = require('./stopList.json');
const queryTweets = require('./queryTweets');
const fs          = require('fs');  

let newTvShowArrayWithTweets = [
    {
        "TvShow": "החפרנים",
        "sentences": [
          { "text": "מבחינתי העניין חפור." },
          { "text": "זה פשוט צ'קגו!" },
          { "text": "מי היה מאמין שמדע יכול כל כך לבדר!" }
        ]
      }
];

newTvShowArrayWithTweets.forEach(async (TvShowItem) => {
    let newTvShowItem = {
        TvShow: TvShowItem.TvShow,
        sentences: []
    }
    newTvShowItem.sentences = await queryTweets.getSentence(TvShowItem.sentences);
    fs.appendFileSync('myTesta.json', JSON.stringify(newTvShowItem, null ,4));
});









