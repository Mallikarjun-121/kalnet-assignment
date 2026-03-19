const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Add your Gemini API key here
const genAI = new GoogleGenerativeAI("AIzaSyBq6g2J3HtqXJsg92doFOZMQaLpL0T0B3M");

// ✅ Test route (optional but useful)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Main API
app.post("/analyze", async (req, res) => {
  try {
    const idea = req.body.idea;
    console.log("Idea received:", idea);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const prompt = `
Convert this idea into structured JSON.

Return ONLY JSON:
{
  "goal": "",
  "steps": [],
  "missing": [],
  "actions": [],
  "score": number
}

Idea: ${idea}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    let parsed;

    try {
      text = text.replace(/```json|```/g, "").trim();
      parsed = JSON.parse(text);
    } catch (e) {
      console.log("AI raw response:", text);

      parsed = {
        goal: "AI parsing failed",
        steps: ["Try again"],
        missing: [],
        actions: [],
        score: 50
      };
    }

    res.json(parsed);

  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ IMPORTANT for Render deployment
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});