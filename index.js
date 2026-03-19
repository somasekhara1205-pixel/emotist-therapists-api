import express from "express";

const app = express();
const PORT = 3000;

// Mock database
const therapists = [
  { id: 1, name: "Dr. Sarah Johnson", specialization: "Anxiety" },
  { id: 2, name: "Dr. Michael Lee", specialization: "Depression" }
];

// Middleware for logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} called`);
  next();
});

// GET /therapists endpoint
app.get("/therapists", (req, res) => {
  try {
    const { id } = req.query;

    // If ID is provided → return specific therapist
    if (id) {
      const therapist = therapists.find(t => t.id === Number(id));

      if (!therapist) {
        return res.status(404).json({
          error: "Therapist not found"
        });
      }

      return res.json(therapist);
    }

    // Return all therapists
    res.json(therapists);

  } catch (error) {
    console.error("Error fetching therapists:", error);

    res.status(500).json({
      error: "Internal Server Error"
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
