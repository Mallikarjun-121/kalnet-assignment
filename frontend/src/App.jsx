import { useState } from "react";
import axios from "axios";

function App() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      console.log("Button clicked");

      const res = await axios.post("https://kalnet-assignment.onrender.com/analyze", { idea });

      console.log("Response:", res.data);

      setResult(res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Explain My Plan</h1>

      <textarea
        rows="5"
        cols="50"
        placeholder="Enter your idea..."
        onChange={(e) => setIdea(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>Analyze</button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Goal:</h3>
          <p>{result.goal}</p>

          <h3>Steps:</h3>
          <ul>
            {result.steps?.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          <h3>Missing:</h3>
          <ul>
            {result.missing?.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>

          <h3>Action Steps:</h3>
          <ul>
            {result.actions?.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>

          <h3>Score:</h3>
          <p>{result.score}</p>
        </div>
      )}
    </div>
  );
}

export default App;