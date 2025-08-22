import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// ✅ CORS configuration
app.use(cors({
  origin: [
    'https://prasadshaswat.tech',
    'https://www.prasadshaswat.tech',
    'http://localhost:3000',
    'http://localhost:5000'
  ],
  credentials: false,
  optionsSuccessStatus: 200
}));

app.use(express.json());

// ✅ Health check endpoint
app.get("/health", (req, res) => {
  res.json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    port: process.env.PORT || 4000 
  });
});

// ✅ API status endpoint
app.get("/api/status", (req, res) => {
  res.json({ 
    status: "API is running",
    endpoints: ["/health", "/leetcode"],
    cors: "configured",
    timestamp: new Date().toISOString()
  });
});

// ✅ Serve frontend build
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../frontend/build"))); // adjust path to frontend build

// ✅ Backend proxy with error handling
app.post("/leetcode", async (req, res) => {
  console.log("Received LeetCode request:", req.body);
  const { query, variables } = req.body;
  
  // Validate request
  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`LeetCode API responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("LeetCode response received successfully");
    res.json(data);
  } catch (err) {
    console.error("Error fetching LeetCode:", err);
    res.status(500).json({ 
      error: "Failed to fetch LeetCode data",
      details: err.message 
    });
  }
});

// ✅ Catch-all: send index.html for React Router
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
