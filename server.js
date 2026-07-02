const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

console.log("MONGO_URI starts with:", process.env.MONGO_URI?.substring(0, 30));

const authRoutes = require("./routes/auth");
const expenseRoutes = require("./routes/expenses");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Spendly backend is running! 🚀");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected!"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

