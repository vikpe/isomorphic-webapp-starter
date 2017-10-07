import chalk from 'chalk';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';

const config = {
  portNumber: 3000,
  publicDir: 'dist/public',
};

const server = express();
server.use(express.static(config.publicDir)); // serve static content
server.use(bodyParser.json()); // Parse incoming request bodies as JSON (available under request.body)
server.use(compression()); // compress all responses

server.listen(config.portNumber, () => {
  console.log(chalk`{green.bold Server started:} {white http://localhost:${config.portNumber}} {grey (/${config.publicDir}/)}`);
});
