import cors, { CorsOptions } from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import logger from './lib/logger';
import router from './router';

// .env configuration
dotenv.config({ path: `.env.${process.env.NODE_ENV}.local` });

// Check if environment variables are defined
if (!process.env.PORT) {
  logger.error('PORT environment variable is not defined. Defaulting to 3000');
}

if (!process.env.CORS_ORIGIN) {
  logger.warn('CORS_ORIGIN environment variable is not defined. Defaulting to *.');
}

if (!process.env.API_BASE_PATH) {
  logger.warn('API_BASE_PATH environment variable is not defined. Defaulting to /.');
}

// Initialize Express app
const app: express.Application = express();

// CORS Options
const corsOptions: CorsOptions = {
  origin: process.env.CORS_ORIGIN || '*',
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions)); // Enable Cross-Origin Ressource Sharing
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
const API_BASE_PATH = `/${(process.env.API_BASE_PATH || '').replace(/\//g, '')}`;
app.use(API_BASE_PATH, router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}${API_BASE_PATH}.`);
});
