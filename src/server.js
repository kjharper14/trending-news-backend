const tweet = require('./src/routes/tweets');
const trends = require('./src/routes/trends');
const news = require('./src/routes/news');
const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3001;
var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.resolve(__dirname, './build')));

app.use("/api", tweet);
app.use("/api", trends);
app.use("/api", news);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});