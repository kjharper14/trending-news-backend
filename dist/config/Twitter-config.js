require('dotenv').config();

const twitterClientStrategies = {
    'v1': require('twitter'),
    'v2': require('twitter-v2')
}

async function tweet(endpoint, ids) {
    return await client('v2').get(endpoint, ids).then((tweet) => tweet.data)
}

async function trends(endpoint, id) {
    return await client('v1').get(endpoint, id).then((trend) => trend)
}

function client(version) {
    const TwitterClient = twitterClientStrategies[version];
    const client = new TwitterClient({
        consumer_key: process.env.REACT_APP_TWITTER_CONSUMER_API_KEY,
        consumer_secret: process.env.REACT_APP_TWIITER_CONSUMER_API_SECRET_KEY,
        access_token_key: process.env.REACT_APP_TWITTER_API_KEY,
        access_token_secret: process.env.REACT_APP_TWIITER_API_SECRET_KEY,
    });

    return client;
}

module.exports = { tweet, trends }