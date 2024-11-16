/* eslint-disable react/prop-types */
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const ContactList = ({ contacts, onEdit, onDelete }) => {
  return (
    <List>
      {contacts.map((contact) => (
        <ListItem key={contact.id} divider>
          <ListItemText
            primary={`${contact.first_name} ${contact.last_name}`}
            secondary={`${contact.email} | ${contact.phone}`}
          />
          <IconButton
            color="primary"
            onClick={() => onEdit(contact)}
          >
            <Edit />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => onDelete(contact.id)}
          >
            <Delete />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
