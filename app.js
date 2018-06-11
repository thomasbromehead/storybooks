const express = require('express');
const mongoose = require('mongoose');
const app = express();
const passport = require('passport');

//Passport Config
require('./config/passport')(passport);

//Load Routes
const auth = require('./routes/auth');

//Use Routes
app.use('/auth', auth)

app.get('/', (req, res) => {
  res.send('It Works!');
});



const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});