const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    like: {
      type: Array,
      default: [],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    userDetails: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
//  const Tweet = mongoose.model("Tweet", tweetSchema);
// Define the model
const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
