const express = require("express");
const router = express.Router();
const {
  createTweet,
  deleteTweet,
  getAllTweets,
  getFollowingTweets,
  likeOrDislike,
} = require("../controllers/tweetController.js");
const isAuthenticated = require("../config/auth.js");

router.route("/create").post(isAuthenticated, createTweet);
router.route("/create").post(isAuthenticated, createTweet);
router.route("/delete/:id").delete(isAuthenticated, deleteTweet);
router.route("/like/:id").put(isAuthenticated, likeOrDislike);
router.route("/alltweets/:id").get(isAuthenticated, getAllTweets);
router.route("/followingtweets/:id").get(isAuthenticated, getFollowingTweets);

module.exports = router;
