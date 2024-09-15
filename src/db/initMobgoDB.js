import mongoose from 'mongoose';
import { env } from '../utils/env.js';
import { MONGODB_VARS } from '../constants/index.js';

export const initMongoDB = async () => {
  try {
    const user = env(MONGODB_VARS.MONGODB_USER);
    const password = env(MONGODB_VARS.MONGODB_PASSWORD);
    const url = env(MONGODB_VARS.MONGODB_URL);
    const db = env(MONGODB_VARS.MONGODB_DB);

    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority`,
    );
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
};
