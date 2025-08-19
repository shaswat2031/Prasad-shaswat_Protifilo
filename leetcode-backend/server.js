import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// ✅ Root route (so Render shows something at "/")
app.get("/", (req, res) => {
  res.send("✅ LeetCode Proxy Backend is running!");
});

// Endpoint to fetch LeetCode data
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

app.listen(PORT, () => {
  console.log(`Backend proxy running at http://localhost:${PORT}`);
});
