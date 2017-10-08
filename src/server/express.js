import chalk from 'chalk';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import ApiRouter from './ApiRouter';

const config = {
  portNumber: 3000,
  publicDir: 'dist/public',
};

const app = express();
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  response.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');

  // intercept OPTIONS method
  if ('OPTIONS' === request.method) {
    response.sendStatus(204);
  }
  else {
    next();
  }
});
app.use(express.static(config.publicDir)); // serve static content
app.use(bodyParser.json()); // Parse incoming request bodies as JSON (available under request.body)
app.use(compression()); // compress all responses
app.use('/api', ApiRouter); // routes for API

app.listen(config.portNumber, () => {
  console.log(chalk`{green.bold Server started:} {white http://localhost:${config.portNumber}} {grey (/${config.publicDir}/)}`);
});
