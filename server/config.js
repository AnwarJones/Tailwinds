// server/config.js
module.exports = {
    AUTH0_DOMAIN: 'bangoskank.auth0.com', // e.g., kmaida.auth0.com
    AUTH0_API_AUDIENCE: 'http://localhost:3200', // e.g., 'http://localhost:8083/api/'
    MONGO_URI: process.env.MONGO_URI|| "mongodb://AnwarJones:T!tl3f!ght@anwarscluster-shard-00-00-razyd.mongodb.net:27017,anwarscluster-shard-00-01-razyd.mongodb.net:27017,anwarscluster-shard-00-02-razyd.mongodb.net:27017/test?ssl=true&replicaSet=AnwarsCluster-shard-0&authSource=admin"
  };