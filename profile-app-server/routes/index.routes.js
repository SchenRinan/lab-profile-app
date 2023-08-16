const express = require("express");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const User = require("../models/User.model");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

//put image on respected user
router.put('/users', isAuthenticated, (req, res, next) => {
  User.findByIdAndUpdate(req.payload._id, {image: req.body.image}, {new: true})
    .then(userUpdated=> res.status(200).json(userUpdated))
    .catch((err) => next(err))
});

// //upload image using form-data
// router.post('/upload', isAuthenticated, (req, res, next) => {
//   const formData = new FormData();
//   formData.append('imageURL', req.body.imageURL)
//   console.log(req.body)
//   res.status(200).json({message: 'testing parameters'});
// });

module.exports = router;
