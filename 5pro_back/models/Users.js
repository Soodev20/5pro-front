const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  profileUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
  },
  latest_Avg: {
    type: Number,
  },
  records: {
    type: Object,
  },
  awards: {
    type: Object,
  },
});

userSchema.plugin(findOrCreate);

module.exports = mongoose.model("User", userSchema);
