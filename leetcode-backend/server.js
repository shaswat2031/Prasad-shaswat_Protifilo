import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve frontend build
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../frontend/build"))); // adjust path to frontend build

// ✅ Backend proxy
app.post("/leetcode", async (req, res) => {
  const { query, variables } = req.body;
  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error fetching LeetCode:", err);
    res.status(500).json({ error: "Failed to fetch LeetCode data" });
  }
});

// ✅ Catch-all: send index.html for React Router
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
