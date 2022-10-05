const tweet = require('./routes/tweets');
const trends = require('./routes/trends');
const news = require('./routes/news');
const express = require("express");
const path = require('path');
var bodyParser = require('body-parser')
const app = express();
const serverless = require('serverless-http');
var cors = require('cors')


app.use(cors())
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.resolve(__dirname, './build')));

app.use("/.netlify/functions/server/api", tweet);
app.use("/.netlify/functions/server/api", trends);
app.use("/.netlify/functions/server/api", news);

app.use('/.netlify/functions/server', router);

module.exports = app
module.exports.handler = serverless(app);