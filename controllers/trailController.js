var db = require("../models");
var Trail = db.Trail;

// GET /api/trails
function index(req, res) {
  // send back all our trails as JSON objects
  Trail.find({}, function(err, allTrails) {
    //console.log(allTrails);
    res.json(allTrails);
  });
}

function update(req, res) {
  console.log("reached trailController.js req.body.id =", req.body.id);
}


module.exports = {
  index: index,
  // create: create,
  // show: show,
  // destroy: destroy,
  update: update
};
