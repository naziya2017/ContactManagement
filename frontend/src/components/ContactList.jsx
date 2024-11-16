/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const ContactList = ({ contacts, onEdit, onDelete }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "first_name", headerName: "First Name", width: 150,sortable:true },
    { field: "last_name", headerName: "Last Name", width: 150, sortable:true },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "company", headerName: "Company", width: 150 },
    { field: "job_title", headerName: "Job Title", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      sortable:false,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onEdit(params.row)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onDelete(params.row.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
  rows={contacts}
  columns={columns}
  pageSize={5}
  rowsPerPageOptions={[5, 10, 20]}
  sortingOrder={['asc', 'desc']} // Allows ascending and descending sorting
  disableMultipleColumnsSorting={false} // Enables multi-column sorting
  checkboxSelection
  disableSelectionOnClick
      />
    </div>
  );
};

export default ContactList;
