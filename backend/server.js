const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Routes
app.use('/api/contacts', contactRoutes);
app.get('/api/contacts', (_req, res) => {
  res.json({ message: 'Contacts fetched successfully' });
});


// Set up the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
