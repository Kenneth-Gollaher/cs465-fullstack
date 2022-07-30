const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");
// request from trips and pass to controller
router.route("/trips").get(tripsController.tripsList);

router.route("/trips/:tripCode").get(tripsController.tripsFindCode);

module.exports = router;