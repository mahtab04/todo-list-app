const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home_controller");

// GET /
router.get("/", homeController.home);

// Export the router
module.exports = router;