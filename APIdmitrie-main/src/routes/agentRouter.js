const express = require("express");
const router = express.Router();
const { CreateAgent, getallagents } = require("../controllers/agentController");

router.post("/createagent", CreateAgent);
router.get("/all", getallagents);

module.exports = router;
