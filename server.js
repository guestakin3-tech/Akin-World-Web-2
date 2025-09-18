import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Example API route for music generation (mock)
app.post('/api/generate-music', (req, res) => {
  const { prompt } = req.body;
  res.json({ message: `AI music generated for: ${prompt}` });
});

// Example API route for updates
app.get('/api/updates', (req, res) => {
  res.json([
    { id: 1, type: "movie", title: "New Movie Released!", time: "2 mins ago" },
    { id: 2, type: "music", title: "Hot New Song!", time: "5 mins ago" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
