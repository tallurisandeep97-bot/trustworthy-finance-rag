import { useState } from "react";
import { askQuestion } from "./api";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [sources, setSources] = useState([]);

  const handleAsk = async () => {
    const data = await askQuestion(question);
    setAnswer(data.answer);
    setSources(data.sources || []);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Trustworthy Finance RAG</h1>

      <textarea
        rows="4"
        cols="60"
        placeholder="Ask: Why is Nvidia stock moving?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <br /><br />

      <button onClick={handleAsk}>Ask</button>

      <h2>Answer</h2>
      <pre>{answer}</pre>

      <h2>Sources</h2>
      {sources.map((source, index) => (
        <p key={index}>
          <a href={source.url} target="_blank">
            {source.title}
          </a>
        </p>
      ))}
    </div>
  );
}

export default App;
