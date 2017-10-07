const chalk       = require('chalk');
const express     = require('express');
const compression = require('compression');
const app         = express();
const portNumber  = 3000;
const publicDir   = 'dist/public';

app.use(compression()); // compress all responses
app.use(express.static(publicDir)); // serve static content 

app.listen(portNumber, () => {
  console.log(chalk`{green.bold Server started:} {white http://localhost:${portNumber}} {grey (/${publicDir}/)}`);
});
