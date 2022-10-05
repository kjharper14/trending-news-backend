let { getNewsRequest } = require('../config/News-config');
let express = require('express');
let router = express.Router();

router.post('/news', (req, res) => {
  getNewsRequest(req.body).then((news) => {
    return res.json({
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: 200,
      body: JSON.stringify(news)
    });
  }).catch((err) => console.log(err));
})

module.exports = router;

