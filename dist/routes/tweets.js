let { tweet } = require('../config/Twitter-config');
let express = require('express');
let router = express.Router();

router.post('/tweets', (req, res) => {

  return tweet('tweets', { 'ids': req.body }).then((tweet) => {
    return res.json({
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: 200,
      body: JSON.stringify(tweet)
    });
  });
})

module.exports = router;

