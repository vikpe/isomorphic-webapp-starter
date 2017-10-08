# Isomorphic Webapp Starter
Isomorphic web application starter running on [Node](https://nodejs.org/).

## Stack (MERN-ish)
The client consumes data from the server via a REST API.

**Client (frontend)**

* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)

**Server (backend)**

* [MongoDB](https://www.mongodb.com/) (object modelling using [Mongoose](http://mongoosejs.com/))
* [Express](https://expressjs.com/) (web server)

## Development features
* Production build script (minify and hash builds).
* [ES6](https://github.com/lukehoban/es6features) support for both client and server.
* [Webpack](https://webpack.js.org/)
* [Hot Module Replacement (HMR)](https://webpack.js.org/guides/hmr-react/) - Instantly inject client-side changes to browser
* [nodemon](https://nodemon.io/) - Automatically restart server on server-side changes
* [Babel](http://babeljs.io/)
* [SASS](http://sass-lang.com/)
* Image loading.
* Code quality (linting).

## Definitions
* **Client** - Frontend part (React, Redux)
* **Server** - Backend part (Express, MongoDB)
* **App** - Client + Server
* **HMR** - [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)

## Installation
1. Clone/download repo
2. `npm install`
3. [Download and install MongoDB (Community Server)](https://www.mongodb.com/download-center#community).

## Usage
**Prerequisite** - Make sure that MongoDB is running (`mongod`).

### Development

`npm run start-dev`

* Builds client continously (HMR enabled) served @ `http://localhost:8080` 
* Restarts server continously (nodemon enabled) served @ `http://localhost:3000` 

### Production

`npm run start-prod`

* Builds client once (HMR disabled)
* Builds server once (nodemon disabled)
* App served @ `http://localhost:3000`

---

### All commands / scripts

Command | Description
--- | ---
`npm run start-dev` | (see description above)
`npm run start-prod` | (see description above)
`npm run start-client-dev` | Build client continously (HMR enabled) serve @ `http://localhost:3000`
`npm run start-server-dev` | Restart server continously (nodemon enabled) serve @ `http://localhost:3000`
`npm run start-server-prod` | Start server once (nodemon disabled) serve @ `http://localhost:3000`
`npm run build` | Build app (client + server) 
`npm run build-client` | Build client (`/dist/public/js/client.[hash].min.js`) 
`npm run build-server` | Build server (`/dist/server.min.js`) 
`npm run lint` | Run JavaScript and SASS linter
`npm run lint:js` | Run JavaScript linter
`npm run lint:sass` | Run SASS linter
`npm run start` | (alias of `npm run start-dev`)

## TODO
* [ ] Add a testing framework (AVA, Jest, ..)
* [ ] Add tests
* [ ] Setup Jenkins, Codeclimate etc

## See also
* [React Webpack Babel Starter](https://github.com/vikpe/react-webpack-babel-starter)
* [React Webpack Typescript Starter](https://github.com/vikpe/react-webpack-typescript-starter)
