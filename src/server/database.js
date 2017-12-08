require('dotenv').config();
import chalk from 'chalk';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const database = {
  connect: callback => {
    const mongoDbUri = process.env.MONGODB_URI;

    const onSuccess = () => {
      console.log(chalk`{green.bold MongoDB connected:} {white ${mongoDbUri}}`);
      callback();
    };

    const onError = error => {
      console.log(chalk`{red.bold MongoDB error:} {white ${mongoDbUri}}`);
      console.log(error);
    };

    mongoose
      .connect(mongoDbUri, { useMongoClient: true })
      .then(onSuccess, onError);
  },
};

export default database;
