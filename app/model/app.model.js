const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  message: String,
});

module.exports = mongoose.model("App", AppSchema);
