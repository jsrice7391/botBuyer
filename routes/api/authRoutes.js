const router = require("express").Router();
const authController = require("../../controllers/authController");

router.route("/register")
    .post(authController.registerUser)

router.route("/login")
    .post(authController.signInUser)


module.exports = router;
