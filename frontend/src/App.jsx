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

    <h3>Actions:</h3>
    <ul>
      {result.actions?.map((a, i) => (
        <li key={i}>{a}</li>
      ))}
    </ul>

    <h3>Score:</h3>
    <p>{result.score}</p>
  </div>
)}