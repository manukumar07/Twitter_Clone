const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const {
  Register,
  Login,
  logout,
  bookmark,
  getMyProfile,
  getOtherUsers,
  follow,
  unfollow,
} = require("../controllers/userController.js");
const isAuthenticated = require("../config/auth.js");

////

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(logout);
router.route("/bookmark/:id").put(isAuthenticated, bookmark);
router.route("/profile/:id").get(isAuthenticated, getMyProfile);
router.route("/otheruser/:id").get(isAuthenticated, getOtherUsers);
router.route("/follow/:id").post(isAuthenticated, follow);
router.route("/unfollow/:id").post(isAuthenticated, unfollow);

module.exports = router;
