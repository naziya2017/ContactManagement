/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import axios from 'axios';

const ContactList = ({ onEdit }) => {
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/contacts')
      .then(response => setContacts(response.data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  // Delete a contact
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/contacts/${id}`)
      .then(() => setContacts(contacts.filter(contact => contact.id !== id)))
      .catch(error => console.error('Error deleting contact:', error));
  };

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.first_name} {contact.last_name} - {contact.email} - {contact.phone}
            <button onClick={() => onEdit(contact)}>Edit</button>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
