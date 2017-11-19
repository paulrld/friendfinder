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

  app.post('/api/friends', function(req, res){

    var matchingStuff = {
      name: "",
      image: "",
      difference: 123123
    };
    var userData   = req.body;
    var userName   = userData.name;
    var userImage  = userData.image;
    var userScores   = userData.scores;

    var totalDifference = 0;
    //loop through the array of friends and get each scores
    //loop through the friends data array of objects to get each friends scores
    for(var i = 0; i < friendData.length-1; i++){
      //console.log(friendData[i].name);
      totalDifference = 0;//initit

      //loop through that friendData score and the users score and calculate the 
      // absolute difference between the two and push that to the total difference variable set above
      //
      for(var j = 0; j < 10; j++){
        //calculate the difference between the scores and sum them up
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));
        // do this stuff if the total difference is less than or equal to the current match
        console.log(totalDifference)
        if (totalDifference <= matchingStuff.difference){

          // Reset the match to be matching friend
          matchingStuff.name = friendData[i].name;
          matchingStuff.photo = friendData[i].photo;
          matchingStuff.difference =parseInt(totalDifference);
        }
      }
    }

    friendData.push(userData);
 
    res.json(matchingStuff);
  });
};