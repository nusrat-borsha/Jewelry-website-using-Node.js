const express = require('express');
const morgan = require('morgan');
const app = express();
const jewelRouter = require('./routes/jewelRoutes');

app.use(express.json());
app.use('/api/v1/jewelries', jewelRouter);

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')); 
  }

module.exports = app;
  
