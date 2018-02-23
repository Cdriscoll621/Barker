// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Dog.findAll({}).then(function(dbDogs) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbDogs);
    });
  });

  // POST route for saving a new todo
  app.post("/api/todos", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Dog.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbDogs) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbDogs);
    });
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function(req, res) {
    db.User.update({ // ???????????????????????????????
      fname: req.fname.text,
      lname: req.lname.text,
      addr1: req.addr1.text,
      addr2: req.addr2.text,
      city:  req.city.text,
      state: req.state.text,
      zip:   req.zip.text,
      owner_profile: req.owner_profile.text      
    }, {
      where: {
        owner_id: req.body.owner_id
      }
    }).then(function(dbDogs) {
      res.json(dbDogs);
    });
  });

  app.put("/api/todos", function(req, res) {
    db.Dog.update({
      dog_name: req.dog_name.text,
      breed: req.breed.text,
      sex: req.sex.text,
      age: req.age.text,
      dog_weight:  req.dog_weight.text,
      demeanor: req.demeanor.text,
      energylvl:   req.energylvl.text,
      size: req.size.text
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbDogs) {
      res.json(dbDogs);
    });
  });

};