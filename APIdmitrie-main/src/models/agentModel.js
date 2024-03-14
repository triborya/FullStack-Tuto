const mongoose = require("mongoose");
const agentSchema = new mongoose.Schema({
  nomAgent: String,
  descriptionAgent: String,
  abilite: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ability" }],
  imageAgent: String,
});

module.exports = mongoose.model("Agent", agentSchema);
