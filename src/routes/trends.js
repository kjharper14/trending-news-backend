let {trends} = require('../config/Twitter-config');
let express = require('express');
let router = express.Router();

router.post('/trends',(req,res) => {
  trends('trends/place.json', req.body).then((trends) => {
    return res.json(trends);
  }).catch((err)=>{
    console.log(err);
  });
})

module.exports = router;

