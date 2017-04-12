'use strict';

const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.load();
const PORT = process.env.PORT || 8000;
app.use(express.static(`${__dirname}/build`));

app.listen(PORT, function(){
  console.log('server up:', PORT);
});
