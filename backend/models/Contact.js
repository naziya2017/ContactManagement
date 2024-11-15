// MySQL contact model (You don't need Mongoose here, just MySQL queries)
const db = require('../config/db');

const createContact = (contact) => {
  const query = `INSERT INTO contacts (firstName, lastName, email, phoneNumber, company, jobTitle) 
                 VALUES ('${contact.firstName}', '${contact.lastName}', '${contact.email}', '${contact.phoneNumber}', '${contact.company}', '${contact.jobTitle}')`;
  return db.promise().query(query);
};

const getAllContacts = () => {
  return db.promise().query('SELECT * FROM contacts');
};

const getContactById = (id) => {
  return db.promise().query('SELECT * FROM contacts WHERE id = ?', [id]);
};

const updateContact = (id, contact) => {
  const query = `UPDATE contacts SET firstName = '${contact.firstName}', lastName = '${contact.lastName}', 
                 email = '${contact.email}', phoneNumber = '${contact.phoneNumber}', company = '${contact.company}', 
                 jobTitle = '${contact.jobTitle}' WHERE id = ?`;
  return db.promise().query(query, [id]);
};

const deleteContact = (id) => {
  return db.promise().query('DELETE FROM contacts WHERE id = ?', [id]);
};

module.exports = { createContact, getAllContacts, getContactById, updateContact, deleteContact };
