const express = require("express");
const Model = require("./model");
const router = express.Router();

router.get("/:id", async (req, res, next) => {
  try {
    const data = await Model.getRecipeById(req.params.id);
    res.status(200).json(data);
  } 
  catch (err) {
    next(err);
  }
});
router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message, stack: err.stack });
});

module.exports = router; 