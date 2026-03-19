const handleSubmit = async () => {
  try {
    console.log("Button clicked");

    const res = await axios.post(
      "https://kalnet-assignment.onrender.com/analyze",
      { idea: idea }
    );

    console.log("Response:", res.data);

    setResult(res.data);
  } catch (error) {
    console.error("Error:", error);
  }
};