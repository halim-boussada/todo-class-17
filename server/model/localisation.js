const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const LocalisationSchema = new mongoose.Schema(
  {
    todo: String,
    type: { type: String, default: "Todo" },
  },
  {
    timestamps: true,
  }
);

const Localisation = mongoose.model("Localisation", LocalisationSchema);

module.exports = Localisation;
