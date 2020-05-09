import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import routes from 'server/routes';

const customMiddleware = {
  allowLocalhostCors: () => (request, response, next) => {
    response.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    response.header(
      'Access-Control-Allow-Headers',
      'X-Requested-With, Content-Type',
    );
    response.header(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS',
    );

    next();
  },
  handleOptionRequests: () => (request, response, next) => {
    if ('OPTIONS' === request.method) {
      response.sendStatus(204);
    } else {
      next();
    }
  },
};

export const applyMiddleware = (app) => {
  // request related
  if (process.env.APP_URI.includes('://localhost')) {
    app.use(customMiddleware.allowLocalhostCors());
  }

  app.use(customMiddleware.handleOptionRequests()); // intercept OPTIONS requests
  app.use(bodyParser.json()); // parse incoming request bodies as JSON (available under request.body)

  // response related
  app.use(compression()); // compress all responses

  // route related
  app.use('/api', routes.api); // routes for API
  app.use(express.static('dist/public')); // serve static content
};
