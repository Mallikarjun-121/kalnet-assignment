const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

// ✅ MAIN API (SAFE VERSION)
app.post("/analyze", async (req, res) => {
  try {
    const idea = req.body.idea;
    console.log("Idea:", idea);

    // 🔥 TEMP LOGIC (NO AI → NO ERROR)
    let goal = "General Goal";
    let steps = ["Plan properly"];
    let missing = ["More details needed"];
    let actions = ["Take first step"];
    let score = 50;

    if (idea.toLowerCase().includes("fit")) {
      goal = "Improve fitness";
      steps = ["Exercise daily", "Eat healthy"];
      actions = ["Start gym", "Track calories"];
      score = 80;
    } 
    else if (idea.toLowerCase().includes("business")) {
      goal = "Start a business";
      steps = ["Research market", "Create plan"];
      actions = ["Validate idea", "Start small"];
      score = 75;
    }

    res.json({ goal, steps, missing, actions, score });

  } catch (error) {
    console.error("ERROR:", error);

    res.json({
      goal: "Server error",
      steps: ["Try again"],
      missing: [],
      actions: [],
      score: 40
    });
  }
});

// ✅ IMPORTANT FOR RENDER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});