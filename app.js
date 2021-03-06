const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const jewelRouter = require('./routes/jewelRoutes');
const checkoutRouter = require('./routes/checkoutRoutes');

app.use(express.json());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/api/v1/jewelries', jewelRouter);
app.use('/api/v1/checkout', checkoutRouter);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')); 
  }

module.exports = app;
  
