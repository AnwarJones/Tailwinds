// server/config.js
module.exports = {
    AUTH0_DOMAIN: 'bangoskank.auth0.com', // e.g., kmaida.auth0.com
    AUTH0_API_AUDIENCE: 'http://localhost:3200', // e.g., 'http://localhost:8083/api/'
    MONGO_URI: process.env.MONGO_URI
  };