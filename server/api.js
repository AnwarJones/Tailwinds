// server/api.js
/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

/*
 |--------------------------------------
 | Authentication Middleware
 |--------------------------------------
 */

module.exports = function(app, config) {
var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://bangoskank.auth0.com/.well-known/jwks.json"
    }),
    audience: 'http://localhost:3200',
    issuer: "https://bangoskank.auth0.com/",
    algorithms: ['RS256']
});
// Check for an authenticated admin user
const adminCheck = (req, res, next) => {
    const roles  = req.user[config.NAMESPACE] || [];
    if (roles.indexOf('admin') > -1) {
        next();
    } else {
        res.status(401).send({message: 'Not authorized for admin access'});
    }
}
/*
 |--------------------------------------
 | API Routes
 |--------------------------------------
 */

  // GET API root
  app.get('/api/', (req, res) => {
    res.send('API works');
  });

};