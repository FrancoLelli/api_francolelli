const express = require("express");
const userSchema = require("../models/user_model.js");

const router = express.Router();

//Create User

//req y res, objeto de peticion y de respuesta
router.post("/users", (req, res) => {
  const newUser = userSchema(req.body);
  console.log(req.body);
  newUser
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//get by ID
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//Update a user
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//Delete a user
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
    .deleteOne({_id: id})
      .then((data) => res.json(data))
      .catch((err) => res.json({ message: err }));
  });

module.exports = router;
