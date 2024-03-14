const Agent = require("../models/agentModel");
const Ability = require("../models/abilityModel");

const CreateAgent = async (req, res) => {
  try {
    const { nomAgent, descriptionAgent, abilite, imageAgent } = req.body;

    const agent = new Agent({
      nomAgent,
      descriptionAgent,
      abilite,
      imageAgent,
    });
    await agent.save();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getallagents = async (req, res) => {
  try {
    const agents = await Agent.find().populate("abilite");
    res.status(200).json(agents);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { CreateAgent, getallagents };
