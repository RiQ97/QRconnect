const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to the database
mongoose.connect("mongodb://localhost/mydatabase", { useNewUrlParser: true });

// Define the data submission route
app.post("/data", (req, res) => {
  // Access the submitted data from the request body
  const { username, email, password } = req.body;

  // Perform any necessary validation or processing on the data

  // Save the data to the database
  const newData = new DataModel({ username, email, password });
  newData
    .save()
    .then((savedData) => {
      res.status(200).json(savedData);
    })
    .catch((error) => {
      res.status(500).json({ error: "An error occurred while saving the data." });
    });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
