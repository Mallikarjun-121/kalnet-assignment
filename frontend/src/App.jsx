import { useState } from "react";
import axios from "axios";

function App() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "https://kalnet-assignment.onrender.com/analyze",
        { idea: idea }
      );

      setResult(res.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Explain My Plan</h1>

      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />

      <br />

      <button onClick={handleSubmit}>Analyze</button>

      {result && (
        <div>
          <p>{result.goal}</p>
        </div>
      )}
    </div>
  );
}

export default App;