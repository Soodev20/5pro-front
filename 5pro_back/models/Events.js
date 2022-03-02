const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const EventSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
  }
  location: {
    type: String,
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
});

activitySchema.path("_id");
activitySchema.plugin(findOrCreate);

module.exports = mongoose.model("Event", EventSchema);