const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const testimonialFile = path.join(__dirname, "testimonials.json");

app.use(cors());
app.use(express.json());

app.post("/api/testimonials", (req, res) => {
  const { name, testimonial } = req.body;
  const data = JSON.parse(fs.readFileSync(testimonialFile, "utf8"));
  data.unshift({ name, testimonial });
  fs.writeFileSync(testimonialFile, JSON.stringify(data, null, 2));
  res.json({ success: true });
});

app.get("/api/testimonials", (req, res) => {
  const data = JSON.parse(fs.readFileSync(testimonialFile, "utf8"));
  res.json(data);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
