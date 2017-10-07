import mongoose from 'mongoose';

const database = {
  connect: () => {
    const databaseUri       = 'mongodb://localhost:27017';
    const connectionOptions = {
      useMongoClient: true,
    };

    mongoose.connect(databaseUri, connectionOptions);
  },
};

export default database;



