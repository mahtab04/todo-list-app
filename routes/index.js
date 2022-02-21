const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home_controller");

// GET home page
router.get("/", homeController.home);


// POST add task
router.post("/add-task", homeController.addTask);


// DELETE delete task
router.post("/delete-task", homeController.deleteMultipleTask);

// Export the router
module.exports = router;
