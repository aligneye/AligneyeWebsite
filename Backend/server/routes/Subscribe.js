// routes/subscribe.js
const express = require("express");
const router = express.Router();
const Submission = require("../models/Submission");

// POST /api/subscribe
router.post("/", async (req, res) => {
  try {
    const { name, email, source } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, error: "Email required" });
    }

    const submission = new Submission({ name, email, source });
    await submission.save();

    res.json({ success: true, message: "Submission saved!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;
