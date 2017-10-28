# Isomorphic Webapp Starter (Heroku version)
> Isomorphic web application starter running on [Node](https://nodejs.org/), setup for deployment to Heroku.

**Note**

* This branch covers details specific for deployment to Heroku.
* Please see the [`master branch`](https://github.com/vikpe/isomorphic-webapp-starter) for usage during development.

## Demo
* [Isomorphic Webapp Starter](https://isomorphic-webapp-starter.herokuapp.com/) on Heroku

## Installation

### 1. Local installation
1. Clone/download repo
2. Checkout the `deploy-heroku` branch.
3. `npm install`
4. [Download and install MongoDB (Community Server)](https://www.mongodb.com/download-center#community).

### 2. Setup app on Heroku
1. Create a new app
1. Navigate to `Resources`
  * Under `Add-ons`, attach `mLab MongoDB` to your app (a free MongoDB service).
3. Navigate to `Deploy`
  * Under `Deployment method`, choose `Github` and select your repo (your fork/clone of this repo).
  * Under `Automatic deploys`, click `Enable Automatic Deploys`.
4. Navigate to `Settings`
  * Under `Config Variables`, click `Reveal Config Vars`
  * Add a config var with the key `APP_URI` with value `[YOUR_APP_URI]` (for example `https://isomorphic-webapp-starter.herokuapp.com`).

Now, whenever you push changes to the branch selected under "Automatic Deploys" (default is `master`), Heroku will automaticlly build and deploy your app. You can see the build progress live on the `Activity` page.

## Differences from the `master` branch

### Contains a `Procfile`
Required on Heroku in order to determine what kind of process to run and defines the start command.

```
web: bash scripts/update_port_number.sh $PORT && npm run start-server-prod
```

### Contains script: `scripts/update_port_number.sh`
This scripts is run from the `Procfile` and updates the port number used by Express whis is set in `server.min.js`.

```
sed -i "s/___EXPRESS_PORT_NUMBER___/$1/g" dist/server.min.js
```

**Why is this required?**

Because the app is built to a bundle _before_ a **random port number** (`$PORT`) is assigned to the dyno that will run the app.

Therefore we need to replace the placeholder string `___EXPRESS_PORT_NUMBER___` in `server.min.js` with the assigned random port number.
