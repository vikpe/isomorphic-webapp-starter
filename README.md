# Isomorphic Webapp Starter [![Build Status](https://travis-ci.org/vikpe/isomorphic-webapp-starter.svg?branch=master)](https://travis-ci.org/vikpe/isomorphic-webapp-starter)
> Isomorphic web application starter running on [Node](https://nodejs.org/).

* **Client** (frontend): [React](https://facebook.github.io/react/) + [Redux](http://redux.js.org/)
* **Server** (backend): [Express](https://expressjs.com/) (web server) + [MongoDB](https://www.mongodb.com/) (object modelling using [Mongoose](http://mongoosejs.com/))

The client consumes data from the server via a REST API.

## Contents
* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
  * [Development](#development)
  * [Production](#production)
  * [All commands / scripts](#all-commands--scripts)
* [Deployment](#deployment)
  * [General](#general)
  * [Heroku](#heroku)

## Features
* Automatically inject client-side changes to browser // [Hot Module Replacement (HMR)](https://webpack.js.org/guides/hmr-react/)
* Automatically restart server on server-side changes // [nodemon](https://nodemon.io/)
* Automatically run tests on code changes (+ display code coverage) // [Jest](https://github.com/facebook/jest)
* Client _and_ server side ES6 support // [Babel](http://babeljs.io/).
* Production build script (minify and hash builds) // [Webpack](https://webpack.js.org/).
* Code quality (linting) // [Prettier](https://github.com/prettier/prettier)
* [SASS](http://sass-lang.com/)
* Image loading / minification

## Installation
1. Clone/download repo
2. `npm install` or `yarn install`
3. [Download and install MongoDB (Community Server)](https://www.mongodb.com/download-center#community).
4. Rename `.env.example` to `.env` and set properties to match your MongoDB URI and server URI.

## Usage
**Prerequisite** - Make sure that MongoDB is running (`mongod`).

### Development

* `npm run start-client-dev` - Build client continously (HMR enabled) serve @ `http://localhost:8080`
* `npm run start-server-dev` - Restart server continously (nodemon enabled) serve @ `http://localhost:3000`

### Production

`npm run start-prod`

* Builds client once (HMR disabled)
* Builds server once (nodemon disabled)
* App served @ `http://localhost:3000`

---

### All commands / scripts

Command | Description
--- | ---
`npm run build` | Build app (client + server)
`npm run build-client` | Build client (`/dist/public/js/client.[hash].min.js`)
`npm run build-server` | Build server (`/dist/server.min.js`)
`npm run clean-dist` | Clean dist, all files (client and server)
`npm run clean-dist-client` | Clean dist client files (`/dist/public/*`)
`npm run clean-dist-server` | Clean dist server files (`/dist/server.min.js`)
`npm run start-prod` | (see description above)
`npm run start-client-dev` | Build client continously (HMR enabled) serve @ `http://localhost:8080`
`npm run start-server-dev` | Restart server continously (nodemon enabled) serve @ `http://localhost:3000`
`npm run start-server-prod` | Start server once (nodemon disabled) serve @ `http://localhost:3000`
`npm run test` | Run tests (once)
`npm run test-watch` | Run tests (continously), on source or test file changes.
`npm run lint` | Run prettier - JavaScript and SASS linter
`npm run start` | (alias of `npm run start-server-prod`)

## Deployment
**Prerequisites**

Make sure that Node and MongoDB are installed and running.

### General
1. Build app: `npm run build`
2. Copy / deploy `/dist/` to a folder on your server.
3. Run app: `npm run start-server-prod`

## See also
* [React Webpack Babel Starter](https://github.com/vikpe/react-webpack-babel-starter)
* [React Webpack Typescript Starter](https://github.com/vikpe/react-webpack-typescript-starter)
