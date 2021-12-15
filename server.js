const dotenv = require('dotenv').config({ path: './config.env' }); 
const mongoose = require('mongoose');
const app = require('./app');

// npm i install mongoose@5, then choose the connection string from config file 
// that was taken from atlas
const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
mongoose.connect(DB,{
  
  useNewUrlParser : true,
  useCreateIndex : true,
  useFindAndModify : false,
  useUnifiedTopology: true,
}).then(()=> {
  console.log("DB connection succesful") 
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app running on ${port}`);
});
