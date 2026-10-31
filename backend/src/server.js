const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Backend is running",
  });
});

app.get("/api/tasks", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, title, completed, created_at FROM tasks ORDER BY id"
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Failed to fetch tasks:", error.message);

    res.status(500).json({
      error: "Failed to fetch tasks",
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend is running on port ${PORT}`);
});