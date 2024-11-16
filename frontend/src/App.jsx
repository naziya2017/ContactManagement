/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null); // To track the contact being edited

  // Fetch contacts from backend
  const fetchContacts = () => {
    axios
      .get("http://localhost:5000/api/contacts")
      .then((response) => setContacts(response.data))
      .catch((error) => console.error("Error fetching contacts:", error));
  };

  // Call fetchContacts in useEffect
  useEffect(() => {
    fetchContacts();
  }, []);

  // After adding/updating/deleting, refresh contact list
  const handleSave = (contact) => {
    if (contact.id) {
      axios
        .put(`http://localhost:5000/api/contacts/${contact.id}`, contact)
        .then(() => {
          fetchContacts();
          setSelectedContact(null); // Clear the form
        })
        .catch((error) => console.error("Error updating contact:", error));
    } else {
      axios
        .post("http://localhost:5000/api/contacts", contact)
        .then(() => fetchContacts())
        .catch((error) => console.error("Error adding contact:", error));
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/contacts/${id}`)
      .then(() => fetchContacts())
      .catch((error) => console.error("Error deleting contact:", error));
  };

  // Handle Edit button click
  const handleEdit = (contact) => {
    setSelectedContact(contact); // Pass selected contact to form
  };

  return (
    <div>
      <h1>Contact Management</h1>
      <ContactForm onSave={handleSave} contact={selectedContact} />
      <ContactList contacts={contacts} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
