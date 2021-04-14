const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");
router.get("/", controller.root);
router.post("/postCode", controller.newCode);
router.post("/runCode", controller.runCode);
router.post("/getCode", controller.getCode);
module.exports = router;
