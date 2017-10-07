import chalk from 'chalk';
import express from 'express';
import compression from 'compression';

const app        = express();
const portNumber = 3000;
const publicDir  = 'dist/public';

app.use(compression()); // compress all responses
app.use(express.static(publicDir)); // serve static content 

app.listen(portNumber, () => {
  console.log(chalk`{green.bold Server started:} {white http://localhost:${portNumber}} {grey (/${publicDir}/)}`);
});
