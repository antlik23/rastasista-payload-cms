// server.js
import payload from 'payload';
import express from 'express';

// Import the Vercel-specific payload config
import payloadConfig from './src/payload.config';

const app = express();

const start = async () => {
  await payload.initAsync({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
    mongoURL: process.env.DATABASE_URI,
    config: payloadConfig,
  });

  return app;
};

// Export the server for Vercel to handle requests
export default start();
