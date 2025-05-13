const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const winston = require('winston');
const cors = require('cors');
const csrf = require('csurf');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');

const userRoutes = require('./routes/user');

const app = express();
const PORT = 3000;

// Middleware: Helmet for HTTP security headers
app.use(helmet());

// Helmet CSP (Content Security Policy)
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"]
    }
  })
);

// HSTS (Strict Transport Security)
app.use(helmet.hsts({ maxAge: 31536000 }));

// Built-in middleware
app.use(express.json());
app.use(cookieParser());

// CORS Configuration
app.use(cors({
  origin: 'http://localhost:3000', // Set your frontend origin
  methods: ['GET', 'POST'],
  credentials: true
}));

// CSRF Protection
const csrfProtection = csrf({ cookie: true });
app.use(csrfProtection);

// Rate Limiting
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 100, // Limit each IP to 100 requests
  message: 'Too many requests, please try again later.'
});
app.use(limiter);

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

// Global error handler
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
