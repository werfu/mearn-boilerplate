const express = require('express');
const path = require('path');
const BodyParser = require("body-parser");
const Mongoose = require("mongoose");

const ModelsRouteGenerator = require('./modelsRouteGenerator');
const models = require('./models');

const app = express();
const publicPath = path.resolve(__dirname, '..', '..', 'public');

Mongoose.connect("mongodb://localhost/appdb");

// Uncomment the following to allow static file loading
// app.use(express.static(publicPath));

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// Default handler
app.get('/', async (req, res) => {
   res.status(200).send();
});

ModelsRouteGenerator(app, models);

app.listen(3000, () => {
   console.log('http://localhost:3000');
});