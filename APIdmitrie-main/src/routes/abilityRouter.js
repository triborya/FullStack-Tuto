const express = require("express");
const router = express.Router();

const {
  CreateAbility,
  getAllAbilities,
} = require("../controllers/abilityController");

router.post("/createability", CreateAbility);
router.get("/all", getAllAbilities);

module.exports = router;
