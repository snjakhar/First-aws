const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://snjakhar:snjakhar@cluster0.inizv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};
