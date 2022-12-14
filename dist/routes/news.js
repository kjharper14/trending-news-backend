let { getNewsRequest } = require('../config/News-config');
let express = require('express');
let router = express.Router();

router.post('/news', (req, res) => {
  getNewsRequest(req.body).then((news) => {
    return res.send({
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: 200,
      body: news
    });
  }).catch((err) => console.log(err));
})

module.exports = router;

