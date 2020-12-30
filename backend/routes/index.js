const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");
router.get("/", controller.root);
router.get("/test", controller.test);
module.exports = router;
