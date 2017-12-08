require('dotenv').config();
import chalk from 'chalk';
import express from 'express';
import { applyMiddleware } from 'server/middleware';

const webserver = {
  start: () => {
    const app = express();
    applyMiddleware(app);

    const port = process.env.PORT || '___EXPRESS_PORT_NUMBER___'; // use port from env if defined, else set token to be replaced later

    app.listen(port, () => {
      console.log(
        chalk`{green.bold Server started:} {white ${
          process.env.APP_URI
        } (port: ${port})} {grey (/dist/public/)}`,
      );
    });
  },
};

export default webserver;
