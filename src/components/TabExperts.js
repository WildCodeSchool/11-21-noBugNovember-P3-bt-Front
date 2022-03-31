import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import "./styles/TabExperts.css";

const TabExperts = ({ setExpertSelection }) => {
  const [experts, setExperts] = useState([]);

  const defaultColDef = {
    resizable: true,
    width: "max-content",
  };

  const gridRef = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:4040/experts")
      .then((res) => res.data)
      .then((res) => setExperts(res));
  }, []);

  const [columnDefs] = useState([
    {
      field: "numExpert",
      headerName: "N°",
      sortable: true,
      filter: true,
      checkboxSelection: false,
      pinned: "left",
      lockPinned: true,
      width: "120px",
    },
    {
      field: "firstname",
      headerName: "First Name",
      sortable: true,
      filter: true,
      pinned: "left",
      lockPinned: true,
      width: "160px",
    },
    {
      field: "lastname",
      headerName: "Last Name",
      sortable: true,
      filter: true,
      pinned: "left",
      lockPinned: true,
      width: "160px",
    },
    { field: "email", editable: true },
    { field: "phone", editable: true },
    {
      field: "jobTitleName",
      sortable: true,
      filter: true,
      headerName: "Job Title",
    },
    {
      field: "companyName",
      sortable: true,
      filter: true,
      headerName: "Company",
    },
    {
      field: "practiceType",
      sortable: true,
      filter: true,
      headerName: "Practice",
    },
    {
      field: "kindOfExpertName",
      sortable: true,
      filter: true,
      headerName: "Category",
    },
    {
      field: "hcpTypeName",
      sortable: true,
      filter: true,
      headerName: "HCP Type",
    },
    {
      field: "sectorName",
      sortable: true,
      filter: true,
      headerName: "Sector",
    },
    {
      field: "industry",
      sortable: true,
      filter: true,
      headerName: "Industry",
    },
    {
      field: "fonction",
      sortable: true,
      filter: true,
      headerName: "Function",
    },
    {
      field: "specialty",
      sortable: true,
      filter: true,
      headerName: "Specialty",
    },

    {
      field: "pastCompanies",
      sortable: true,
      filter: true,
    },
    {
      field: "geoExpertiseName",
      sortable: true,
      filter: true,
      headerName: "Geo Expertise",
    },
    { field: "languages", sortable: true, filter: true },
    {
      field: "expertiseLevelName",
      sortable: true,
      filter: true,
      headerName: "Expertise Level",
    },
    {
      field: "price",
      sortable: true,
      filter: true,
      headerName: "Hourly Rate",
    },
    { field: "cost", sortable: true, filter: true },
    {
      field: "linkedinProfile",
      sortable: true,
      filter: true,
      editable: true,
      headerName: "Linkedin",
    },
    {
      field: "projectTitle",
      sortable: true,
      filter: true,
      headerName: "Project",
    },
    { field: "feedbackExpert", headerName: "Comment" },
    { field: "keywords", sortable: true, filter: true },
    { field: "contact", sortable: true, filter: true },
  ]);

  const rowSelection = (e) => {
    let expertSelected = gridRef.current.api.getSelectedRows();
    setExpertSelection(expertSelected[0].id);
  };

  return (
    <div
      className="ag-theme-alpine tableau"
      style={{
        height: "74vh",
        fontFamily: "var(--fontBody)",
        boxShadow: "0px 0px 15px 0px rgb(0 0 0 / 50%)",
      }}
    >
      <AgGridReact
        ref={gridRef}
        defaultColDef={defaultColDef}
        rowData={experts}
        columnDefs={columnDefs}
        rowSelection="single"
        onSelectionChanged={(e) => rowSelection(e)}
      ></AgGridReact>
    </div>
  );
};

export default TabExperts;
