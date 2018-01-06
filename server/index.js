const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const recentBaseUrl = "/api/places";
const port = process.env.PORT || 3001;
const wc = require(__dirname + '/controllers/weather_controller');

app.use(bodyParser.json());

app.post(recentBaseUrl, wc.create);
app.get(recentBaseUrl, wc.read);

app.listen(port, () => {console.log(`Welcome to the Big Show on port ${port}`)});