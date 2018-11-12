var friend = require("../data/friend");
var path = require("path");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friend);
  });

  
  app.post("/api/friends", function (req, res) {
    var newApp = req.body;
    var newFriendScores = newApp.scores;
    console.log(newApp);

    var differentAll = 51;
    var name = "";
    var url = "";

    for (var i = 0; i < friend.length; i++) {
      var diffirent = 0;

      for (var j = 0; j < friendScores.length; j++) {
        diffirent += Math.abs(friend[i].scores[j] - friendScores[j])
      }

      //the matth that determines the match
      if (diffirent < differentAll) {
        differentAll = diffirent;
        name = friend[i].name;
        url = friend[i].photo;
      }
    }

    friend.push(newApp);
  });
};