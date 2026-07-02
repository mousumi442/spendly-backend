const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Food", "Transport", "Shopping", "Bills", "Entertainment", "Other"],
  },
  date: {
    type: Date,
    required: true,
  },
  note: {
    type: String,
    default: "",
  },
}, { timestamps: true });

module.exports = mongoose.model("Expense", expenseSchema);