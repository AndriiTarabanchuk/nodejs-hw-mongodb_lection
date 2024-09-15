import { initMongoDB } from './db/initMobgoDB.js';
import { startServer } from './server.js';

const bootstrap = async () => {
  await initMongoDB();

  startServer();
};

bootstrap();
