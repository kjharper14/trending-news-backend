let { trends } = require('../config/Twitter-config');
let express = require('express');
let router = express.Router();

router.post('/trends', (req, res) => {
  trends('trends/place.json', req.body).then((trends) => {
    return res.send({
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: 200,
      body: trends
    });
  }).catch((err) => {
    console.log(err);
  });
})

module.exports = router;

