const express = require("express");
const { checkout } = require("./orders.controllers");
const passport = require("passport");

const router = express.Router();
// passprt.auth the user should be logged in to checkout to take his id and
//place the order by his name
router.post(
  "/checkout",
  passport.authenticate("jwt", { session: false }),
  checkout
);

module.exports = router;
