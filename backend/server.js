const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');
const connectDB = require('./config/db');
const {Sequelize,DataTypes} = require('sequelize');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to the database
connectDB();

//Connect to MySQL Database
const sequelize = new Sequelize('contact_db', 'root', 'Naz@1705', {
  host: 'localhost',
  dialect: 'mysql',
});

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies


// In-memory "database"
let contacts = [];

// Test Database Connection
sequelize.authenticate()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Unable to connect to the database:', err));

// Define the Contacts Model
const Contact = sequelize.define('Contact', {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { timestamps: false });

// Sync Model with Database
sequelize.sync();

// Routes
// 1. Get all contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Add a new contact
app.post('/api/contacts', async (req, res) => {
  try {
    const { first_name, last_name, email, phone } = req.body;

    // Check if all required fields are provided
    if (!first_name || !last_name || !email || !phone) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Map request fields to model fields
    const newContact = await Contact.create({
      first_name: first_name,
      last_name: last_name,
      email,
      phone,
    });

    res.status(201).json(newContact);
  } catch (err) {
    console.error('Error creating contact:', err); // Log the exact error
    res.status(500).json({ error: err.message }); // Send error message to frontend
  }
});

// 3. Update a contact
app.put('/api/contacts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, phone } = req.body;
    const contact = await Contact.findByPk(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    contact.first_name = first_name;
    contact.last_name = last_name;
    contact.email = email;
    contact.phone = phone;
    await contact.save();
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Delete a contact
app.delete('/api/contacts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByPk(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    await contact.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
