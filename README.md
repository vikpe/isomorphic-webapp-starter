# Isomorphic Webapp Starter
Isomorphic web application starter with hot module replacement (HMR) for rapid development.

* **[React](https://facebook.github.io/react/)** (16.x)
* **[Redux](http://redux.js.org/)**
* **[Webpack](https://webpack.js.org/)** (3.x)
* **[Hot Module Replacement (HMR)](https://webpack.js.org/guides/hmr-react/)** using [React Hot Loader](https://github.com/gaearon/react-hot-loader) (3.x)
* **[Babel](http://babeljs.io/)** (6.x)
* **[Express](https://expressjs.com/)**
* [SASS](http://sass-lang.com/)
* Image loading/minification using [Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader)
* Code quality (linting) for JavaScript and SASS/CSS.
* Production build script

## Definitions
* **Client** - Frontend part (React, Redux)
* **Server** - Backend part (Express, MongoDB)
* **App** - Client + Server
* **HMR** - [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)

## Installation
1. Clone/download repo
2. `npm install`

## Usage
**Development**

`npm run start-dev`

* Builds client continously (HMR enabled) served @ `http://localhost:8080` 
* Restarts server continously (nodemon enabled) served @ `http://localhost:3000` 

**Production**

`npm run start-prod`

* Builds client once (HMR disabled)
* Builds server once (nodemon disabled)
* App served @ `http://localhost:3000`

---

**All commands**

Command | Description
--- | ---
`npm run start-dev` | (see description above)
`npm run start-prod` | (see description above)
`npm run start-client-dev` | Build client continously (HMR enabled) serve @ `http://localhost:3000`
`npm run start-server-dev` | Restart server continously (nodemon enabled) serve @ `http://localhost:3000`
`npm run start-server-prod` | Start server once (nodemon disabled) serve @ `http://localhost:3000`
`npm run build` | Build app (client + server) 
`npm run build-client` | Build client (`/dist/public/client.min.js`) 
`npm run build-server` | Build server (`/dist/server.min.js`) 
`npm run lint` | Run JavaScript and SASS linter
`npm run lint:js` | Run JavaScript linter
`npm run lint:sass` | Run SASS linter
`npm run start` | (alias of `npm run start-dev`)
