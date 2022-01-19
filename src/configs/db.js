const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://snjakhar:Myproject@86>@cluster0.inizv.mongodb.net/testingAtlas");
};
