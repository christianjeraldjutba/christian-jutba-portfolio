// Import required packages
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Initialize dotenv to use environment variables
dotenv.config();

// Initialize the Express app
const app = express();

// Set the port from environment variables or default to 5001
const PORT = process.env.PORT || 5001;

// Middleware Setup
// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());
// Enable Express to parse JSON in the request body
app.use(express.json());

// A simple test route to make sure the server is working
app.get('/api', (req, res) => {
  res.json({ message: `Hello from the server! You've reached Christian's portfolio API.` });
});

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`✅ Backend server is running and listening on http://localhost:${PORT}`);
});