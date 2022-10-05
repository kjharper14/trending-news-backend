let { tweet } = require('../config/Twitter-config');
let express = require('express');
let router = express.Router();

router.post('/tweets', (req, res) => {
  tweet('tweets', { 'ids': req.body }).then((tweet) => {
    return res.send({
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: 200,
      body: JSON.stringify(tweet)
    });
  }).catch((err) => {
    console.log(err);
  });
})

module.exports = router;