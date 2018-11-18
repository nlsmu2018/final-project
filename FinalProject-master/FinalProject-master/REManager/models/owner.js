const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  emailid: String,
  phonenumber: String,
  mobilenumber: { type: String, required: true },
  note:String,
  date: { type: Date, default: Date.now }
});

const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;
