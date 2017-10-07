import chalk from 'chalk';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';

const app        = express();
const portNumber = 3000;
const publicDir  = 'dist/public';

app.use(bodyParser.json()); // Parse incoming request bodies as JSON (available under request.body)
app.use(compression()); // compress all responses
app.use(express.static(publicDir)); // serve static content 

app.listen(portNumber, () => {
  console.log(chalk`{green.bold Server started:} {white http://localhost:${portNumber}} {grey (/${publicDir}/)}`);
});
import database from './database';
database.connect();
