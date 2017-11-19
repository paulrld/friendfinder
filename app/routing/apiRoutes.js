// Pull in required dependencies
var path = require('path');

// Import the list of friend entries
var friendData = require('../data/friends.js');
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
    res.json(friendData);

  });

};