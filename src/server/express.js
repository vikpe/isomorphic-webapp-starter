const chalk      = require('chalk');
const express    = require('express');
const app        = express();
const portNumber = 3000;
const sourceDir  = 'dist/public';

app.use(express.static(sourceDir));

app.listen(portNumber, () => {
  console.log(chalk`{green.bold Server started:} {white http://localhost:${portNumber}} {grey (/${sourceDir}/)}`);
});
