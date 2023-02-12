const twitter = require("twitter-api-client");
const {getTweet} = require("./src/twtr");
const {ocrTweetImages, getFillImage} = require("./src/ocr");
const fs = require("fs");

const config = {
    myUser: process.env.USER,
    writeToken: process.env.API_WRITER_TOKEN,
    twitterClientConfig: {
        accessToken: process.env.TWITTER_ACCESS_TOKEN,
        accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
        apiKey: process.env.TWITTER_CONSUMER_KEY,
        apiSecret: process.env.TWITTER_CONSUMER_SECRET,
        disableCache: true
    },
    twitterToken: {
        key: process.env.TWITTER_ACCESS_TOKEN,
        secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    }
};

function generateFillImage(lang) {
    const image = getFillImage(lang, 1, 10)
    fs.writeFileSync(`${lang}.jpg`, image, 'base64')
}

const exampleImg = "https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/images/bw_buildings.png"
