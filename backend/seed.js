const mongoose = require("mongoose");
const User = require("./models/User");
const Income = require("./models/Income");
const Expense = require("./models/Expense");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB...");

    // Clear existing test user if exists
    await User.deleteOne({ email: "test@example.com" });
    
    // Create Test User
    const user = await User.create({
      fullName: "Test User",
      email: "test@example.com",
      password: "password123",
    });
    console.log("Test User created:", user.email);

    // Add some Income Data
    const incomes = [
      { userId: user._id, source: "Salary", amount: 50000, date: new Date(), icon: "💰" },
      { userId: user._id, source: "Freelancing", amount: 15000, date: new Date(Date.now() - 5*24*60*60*1000), icon: "💻" },
      { userId: user._id, source: "Dividends", amount: 2000, date: new Date(Date.now() - 10*24*60*60*1000), icon: "📈" },
    ];
    await Income.insertMany(incomes);
    console.log("Income data added.");

    // Add some Expense Data
    const expenses = [
      { userId: user._id, category: "Rent", amount: 20000, date: new Date(), icon: "🏠" },
      { userId: user._id, category: "Groceries", amount: 5000, date: new Date(Date.now() - 2*24*60*60*1000), icon: "🛒" },
      { userId: user._id, category: "Internet", amount: 1000, date: new Date(Date.now() - 15*24*60*60*1000), icon: "🌐" },
      { userId: user._id, category: "Dining Out", amount: 3000, date: new Date(Date.now() - 1*24*60*60*1000), icon: "🍕" },
    ];
    await Expense.insertMany(expenses);
    console.log("Expense data added.");

    console.log("Seeding completed successfully!");
    process.exit();
  } catch (err) {
    console.error("Error seeding data:", err);
    process.exit(1);
  }
};

seedData();
