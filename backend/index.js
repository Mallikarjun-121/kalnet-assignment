const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/analyze", (req, res) => {
  const idea = req.body.idea.toLowerCase();

  console.log("User idea:", idea);

  let goal = "";
  let steps = [];
  let missing = [];
  let actions = [];
  let score = 50;

  if (idea.includes("weight") || idea.includes("fit")) {
    goal = "Lose weight and improve fitness";
    steps = [
      "Do daily exercise",
      "Follow healthy diet",
      "Track progress"
    ];
    missing = [
      "No timeline defined",
      "No workout plan"
    ];
    actions = [
      "Start 30 min workout daily",
      "Follow calorie deficit diet"
    ];
    score = 75;
  } 
  else if (idea.includes("business")) {
    goal = "Start a business";
    steps = [
      "Identify idea",
      "Research market",
      "Plan budget"
    ];
    missing = [
      "No target audience",
      "No timeline"
    ];
    actions = [
      "Create business plan",
      "Start small"
    ];
    score = 70;
  } 
  else {
    goal = "General goal";
    steps = ["Define steps"];
    missing = ["More details needed"];
    actions = ["Plan properly"];
    score = 50;
  }

  res.json({ goal, steps, missing, actions, score });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});