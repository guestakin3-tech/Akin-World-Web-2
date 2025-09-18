import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Updates from './components/Updates';
import MusicGenerator from './components/MusicGenerator';

function App() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/updates')
      .then(res => setUpdates(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Header />
      <Updates updates={updates} />
      <MusicGenerator />
    </div>
  );
}

export default App;
