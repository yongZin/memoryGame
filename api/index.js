require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { rankRouter } = require('./routes/rankRouter');

const app = express();
const { MONGO_URI, MY_APP_PORT } = process.env;

mongoose.connect(MONGO_URI);

app.use(express.json());
app.use("/api/ranks", rankRouter);

app.listen(MY_APP_PORT, () => {
  console.log(`Server port ${MY_APP_PORT}`);
});

module.exports = app;