const db = require("../data/db-config");

const getRecipeById = (id) => {
  return db("recipes as r")
    .join("recipeoptions as ro", "r.recipe_id", "ro.recipe_id")
    .join("ingredients as i ", "i.ingredient_id", "ro.ingredient_id")
    .join("steps as s", "s.ingredient_id", "i.ingredient_id")
    .where("r.recipe_id", id)
};


module.exports = {
  getRecipeById
}; 