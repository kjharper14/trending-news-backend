let {tweet} = require('../config/Twitter-config');
let express = require('express');
let router = express.Router();

router.post('/tweets',(req,res) => {

  tweet('tweets', {'ids': req.body}).then((tweet) => {
    return res.json(tweet);
  });
})

module.exports = router;

