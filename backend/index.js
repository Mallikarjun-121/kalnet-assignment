const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 Add your Gemini API Key here
const genAI = new GoogleGenerativeAI("AIzaSyBq6g2J3HtqXJsg92doFOZMQaLpL0T0B3M");

app.post("/analyze", async (req, res) => {
  try {
    const idea = req.body.idea;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
Convert this idea into structured JSON.

Return ONLY JSON in this format:
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

    // Clean response
    text = text.replace(/```json|```/g, "").trim();

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = {
        goal: "Could not parse AI response",
        steps: [],
        missing: [],
        actions: [],
        score: 50
      };
    }

    res.json(parsed);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI processing failed" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});