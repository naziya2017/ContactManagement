/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { TextField, Button, Grid } from "@mui/material";

const ContactForm = ({ onSave, contact }) => {
  const [formData, setFormData] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    job_title: "",
  });

  useEffect(() => {
    if (contact) {
      setFormData(contact);
    }
  }, [contact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ id: "", first_name: "", last_name: "", email: "", phone: "", company: "", job_title: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            name="first_name"
            label="First Name"
            value={formData.first_name}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="last_name"
            label="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="phone"
            label="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="company"
            label="Company"
            value={formData.company}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="job_title"
            label="Job Title"
            value={formData.job_title}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            {formData.id ? "Update Contact" : "Add Contact"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
