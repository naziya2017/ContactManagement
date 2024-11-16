# ContactManagement

## Overview
A full-stack contact management application built with:
- **Frontend:** React.js (with Material UI for styling)
- **Backend:**  Node.js
- **Database:** MySQL using Sequelize ORM

Users can:
- Add, edit, and delete contacts.
- View a sortable and searchable list of contacts.


## Project Setup

### Prerequisites
- Node.js installed (v16+)
- MySQL installed and running

### Backend Setup
1. Clone this repository:
2. Install backend dependencies:
  npm install

Set up your database:
Create a database named contact_db in MySQL.

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=contact_db
PORT=5000

Start the server:
npm start
The server will run on http://localhost:5000.

###Frontend Setup
Navigate to the frontend directory and install dependencies:

cd frontend
npm install
Start the frontend:
npm run dev
The app will run on http://localhost:3000.

Database Schema:

CREATE DATABASE contact_db;
USE contact_db;
CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  phone VARCHAR(15) NOT NULL,
  company VARCHAR(100) NOT NULL,
  job_title VARCHAR(100) NOT NULL
);

Features
Add Contact: Users can add a new contact with fields like name, email, phone, company, and job title.
Edit Contact: Modify existing contacts' details.
Delete Contact: Remove contacts permanently.
Sortable List: Contacts can be sorted by first name or last name.
