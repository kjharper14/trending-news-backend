let { trends } = require('../config/Twitter-config');
let express = require('express');
let router = express.Router();

router.post('/trends', (req, res) => {
  return trends('trends/place.json', req.body).then((trends) => {
    return res.json({
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: 200,
      body: JSON.stringify(trends)
    });
  }).catch((err) => {
    console.log(err);
  });
})

module.exports = router;

