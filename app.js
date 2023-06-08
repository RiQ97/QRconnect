const express = require("express");
const mongoose = require("mongoose");

// Create Express app
const app = express();

// Set up middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for the data
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Define a model based on the schema
const User = mongoose.model("User", userSchema);

// API route for creating a user
app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

// API route for retrieving all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
