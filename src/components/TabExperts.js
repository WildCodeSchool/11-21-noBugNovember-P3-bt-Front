import React, { useState, useEffect, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import axios from "axios";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import "./styles/TabExperts.css";

const TabExperts = ({ setExpertSelection }) => {
  const [experts, setExperts] = useState([]);

  const defaultColDef = {
    resizable: true,
  };

  const gridRef = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:4040/experts")
      .then((res) => res.data)
      .then((res) => setExperts(res));
  }, []);

  // const onButtonClick = e => {
  //       const selectedNodes = gridRef.current.api.getSelectedNodes()
  //       const selectedData = selectedNodes.map( node => node.data )
  //       const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
  //       alert(`Selected nodes: ${selectedDataStringPresentation}`)
  //   }

  const [columnDefs] = useState([
    {
      field: "numExpert",
      headerName: "N°",
      sortable: true,
      filter: true,
      checkboxSelection: false,
      pinned: "left",
      lockPinned: true,
      width: "70px",
    },
    {
      field: "firstname",
      headerName: "First Name",
      sortable: true,
      filter: true,
      pinned: "left",
      lockPinned: true,
      width: "120px",
    },
    {
      field: "lastname",
      headerName: "Last Name",
      sortable: true,
      filter: true,
      pinned: "left",
      lockPinned: true,
      width: "120px",
    },
    { field: "email", width: "130px", editable: true },
    { field: "phone", width: "100px", editable: true },
    {
      field: "jobTitleName",
      sortable: true,
      filter: true,
      width: "130px",
      headerName: "Job Title",
    },
    {
      field: "companyName",
      sortable: true,
      filter: true,
      width: "150px",
      headerName: "Company",
    },
    {
      field: "practiceType",
      sortable: true,
      filter: true,
      width: "100px",
      headerName: "Practice",
    },
    {
      field: "kindOfExpertName",
      sortable: true,
      filter: true,
      width: "150px",
      headerName: "Category",
    },
    { field: "contact", sortable: true, filter: true, width: "130px" },
    {
      field: "expertiseLevelName",
      sortable: true,
      filter: true,
      headerName: "Expertise Level",
    },
    { field: "pastCompanies", sortable: true, filter: true, width: "150px" },
    {
      field: "geoExpertiseName",
      sortable: true,
      filter: true,
      headerName: "Geo Expertise",
    },
    { field: "languages", sortable: true, filter: true, width: "120px" },
    { field: "price", sortable: true, filter: true, width: "100px" },
    { field: "cost", sortable: true, filter: true, width: "100px" },
    { field: "feedbackExpert", headerName: "FeedBack", width: "200px" },
    // { field: "answer", sortable: true, filter: true, width: "100px" },
    { field: "itwday", sortable: true, filter: true, width: "110px" },
    {
      field: "linkedinProfile",
      width: "130px",
      sortable: true,
      filter: true,
      editable: true,
    },
    { field: "projet", sortable: true, filter: true },
    { field: "keywords", sortable: true, filter: true },
  ]);

  const testpascompris = (e) => {
    let expertSelected = gridRef.current.api.getSelectedRows();
    setExpertSelection(expertSelected[0].id);
  };

  return (
    <div
      className="ag-theme-alpine tableau"
      style={{
        height: "600px",
        fontFamily: "var(--fontBody)",
      }}
    >
      {/* <button onClick={onButtonClick}>Get selected rows</button> */}
      <AgGridReact
        ref={gridRef}
        defaultColDef={defaultColDef}
        rowData={experts}
        columnDefs={columnDefs}
        rowSelection="single"
        onSelectionChanged={(e) => testpascompris(e)}
      ></AgGridReact>
    </div>
  );
};

export default TabExperts;
