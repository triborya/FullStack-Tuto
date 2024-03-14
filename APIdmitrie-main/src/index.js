const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/testingChloe");

const agentrouter = require("./routes/agentRouter");
const abilityrouter = require("./routes/abilityRouter");
const userRouter = require("./routes/userRouter");
const auth = require("./middlewares/auth");

app.get("/", (req, res) => {
  res.send("Welcome to Valorant API !! ");
});

app.use("/agent", auth, agentrouter);
app.use("/ability", abilityrouter);
app.use("/auth", userRouter);

app.listen(PORT, () => console.log(`Serveur en ecoute sur le PORT ${PORT}`));
