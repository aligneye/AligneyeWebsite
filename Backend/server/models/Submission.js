// models/Submission.js
const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  source: { type: String, default: "unknown" }, // e.g. "handbook", "newsletter"
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Submission", submissionSchema);
