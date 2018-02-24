// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = (app)=> {

  // GET route for getting all of the todos
  app.get("/api/info", (req, res)=> {
    // findAll returns all entries for a table when used with no options
    db.User.findAll({
      include: [db.Dog]
    }).then((dbDogs)=> {
      res.json(dbDogs);
    });
  });

  // POST route for saving a new todo
  app.post("/api/create", (req, res)=> {
    db.user.create(req.body).then((dbDogs)=> {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbDogs);
    });
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/update", (req, res)=> {
    db.user.update(req.body, {
      where: {
        id: id
      }
    })
    .then((u)=> {
      res.json(u);
    });
  });

  app.put("/api/todos", (req, res)=> {
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
    }).then((dbDogs)=> {
      res.json(dbDogs);
    });
  });

};