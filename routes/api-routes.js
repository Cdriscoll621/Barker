// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Todo.findAll({}).then(function(dbTodo) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbTodo);
    });
  });

  // POST route for saving a new todo
  app.post("/api/todos", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTodo);
    });
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Todo.update({
      fname: req.body.fname,
      lname: req.body.lname,
      addr1: req.body.addr1,
      addr2: req.body.addr2,
      city:  req.body.city,
      state: req.body.state,
      zip:   req.body.zip,
      owner_profile: req.body.owner_profile      
    }, {
      where: {
        owner_id: req.body.owner_id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

  app.put("/api/todos", function(req, res) { //change for dogs
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Todo.update({
      dog_name: req.body.dog_name,
      breed: req.body.breed,
      sex: req.body.sex,
      age: req.body.age,
      dog_weight:  req.body.dog_weight,
      demeanor: req.body.demeanor,
      energylvl:   req.body.energylvl,
      size: req.body.size
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

};