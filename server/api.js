// server/api.js
/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
  }
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const Event = require('./Models/Event');
const Employee = require('./Models/Employee');
const express = require('express');
var router = express.Router();


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
  app.get('/api/events', (req, res) => {
   Event.find()
   .exec().then(docs =>{
       var response = {
           count: docs.length,
           events: docs.map(doc => {
               return {
                   _id: doc._id,
                   eventTitle: doc.eventTitle,
                   eventStartDate: doc.eventStartDate,
                   eventEndDate: doc.eventEndDate,
                   eventDetails: doc.eventDetails,
                   eventLocation: doc.eventLocation,
                   request:{
                       type: "GET",
                       url: "http://localhost:3200/events"+ doc._id
                   }
               };
           })
       };
       res.status(200).json(response)
   }).catch(err=>{
       console.log(err);
       res.status(500).json({
           error: err
       })
   });
  });

};