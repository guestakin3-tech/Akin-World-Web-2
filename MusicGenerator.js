import React, { useState } from 'react';
import axios from 'axios';

function MusicGenerator() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState(null);

  const generateMusic = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/generate-music', { prompt });
      setResult(res.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section>
      <h2>AI Music Creator</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter music idea..."
      />
      <button onClick={generateMusic}>Generate</button>
      {result && <p>{result}</p>}
    </section>
  );
}

export default MusicGenerator;
