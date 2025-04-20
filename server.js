// Sample server setup with Helmet and Winston logging
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const winston = require('winston');
const userRoutes = require('./routes/user'); // Make sure this path is correct

const app = express();
const PORT = 3000;

// Helmet to secure HTTP headers
app.use(helmet());

// Built-in middleware for JSON parsing
app.use(express.json());

// Logger with Winston
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'security.log' })
  ]
});
logger.info('Server is starting...');
// Mount routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
