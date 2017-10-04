# Isomorphic JavaScript webapp
Minimal starter kit with hot module replacement (HMR) for rapid development.

* **[React](https://facebook.github.io/react/)** (16.x)
* **Redux**
* **[Webpack](https://webpack.js.org/)** (3.x)
* **[Hot Module Replacement (HMR)](https://webpack.js.org/guides/hmr-react/)** using [React Hot Loader](https://github.com/gaearon/react-hot-loader) (3.x)
* **[Babel](http://babeljs.io/)** (6.x)
* [SASS](http://sass-lang.com/)
* Image loading/minification using [Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader)
* Code quality (linting) for JavaScript and SASS/CSS.
* Production build script

## Installation
1. Clone/download repo
2. `npm install`

## Usage
**Development**

`npm run start-dev`

* Build app continously (HMR enabled)
* App served @ `http://localhost:8080` 

**Production**

`npm run start-prod`

* Build app once (HMR disabled)
* App served @ `http://localhost:3000`

---

**All commands**

Command | Description
--- | ---
`npm run start-dev` | Build app continously (HMR enabled) and serve @ `http://localhost:8080`
`npm run start-prod` | Build app once (HMR disabled) and serve @ `http://localhost:3000`
`npm run build` | Build app (client and server) 
`npm run build-client` | Build client (`/dist/public/client.min.js`) 
`npm run build-server` | Build server (`/dist/server.min.js`) 
`npm run lint` | Run JavaScript and SASS linter
`npm run lint:js` | Run JavaScript linter
`npm run lint:sass` | Run SASS linter
`npm run start` | (alias of `npm run start-dev`)
