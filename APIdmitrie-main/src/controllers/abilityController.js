const Ability = require("../models/abilityModel");
const CreateAbility = async (req, res) => {
  try {
    const { name, description, typeability } = req.body;
    const ability = new Ability({ name, description, typeability });
    await ability.save();
    res.status(201).send("create sucess");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllAbilities = async (req, res) => {
  try {
    const abilities = await Ability.find();
    res.status(200).json(abilities);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { CreateAbility, getAllAbilities };
