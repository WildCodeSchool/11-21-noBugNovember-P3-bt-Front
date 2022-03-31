<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import axios from 'axios'
=======
import React, { useState, useEffect, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import axios from "axios";
>>>>>>> dev

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

import './styles/TabClients.css'

<<<<<<< HEAD
const TabClients = () => {
  const [clients, setClients] = useState([])
  // const gridRef = useRef(null);
=======
const TabClients = ({ setClientSelection }) => {
  const [clients, setClients] = useState([]);
  const gridRef = useRef();
>>>>>>> dev

  useEffect(() => {
    axios.get('http://localhost:4040/clients/').then((response) => {
      setClients(response.data)
    })
  }, [])

  console.log(clients)

  const defaultColDef = {
    resizable: true,
  }

  const [columnDefs] = useState([
    {
      field: 'numClient',
      sortable: true,
      filter: true,
      pinned: 'left',
      lockPinned: true,
<<<<<<< HEAD
      width: '120px',
=======
      width: "120px",
      headerName: "N°",
>>>>>>> dev
    },
    {
      field: 'firstname',
      sortable: true,
      filter: true,
      pinned: 'left',
      lockPinned: true,
<<<<<<< HEAD
      width: '160px',
=======
      width: "160px",
      headerName: "First Name",
>>>>>>> dev
    },
    {
      field: 'lastname',
      sortable: true,
      filter: true,
      pinned: 'left',
      lockPinned: true,
<<<<<<< HEAD
      width: '160px',
    },
    { field: 'phone' },
    { field: 'email' },
    { field: 'contactType', sortable: true, filter: true },
    { field: 'companyName', sortable: true, filter: true },
    { field: 'city', sortable: true, filter: true },
    { field: 'languages', sortable: true, filter: true },
    { field: 'service', sortable: true, filter: true },
    { field: 'feedbackClient' },
    { field: 'numProject', sortable: true, filter: true },
  ])
=======
      width: "160px",
      headerName: "Last Name",
    },
    { field: "phone" },
    { field: "email" },
    {
      field: "contactType",
      sortable: true,
      filter: true,
      headerName: "Contact",
    },
    {
      field: "companyName",
      sortable: true,
      filter: true,
      headerName: "Company",
    },
    { field: "city", sortable: true, filter: true },
    { field: "languages", sortable: true, filter: true },
    { field: "service", sortable: true, filter: true },
    { field: "feedbackClient", headerName: "Comment" },
    {
      field: "numProject",
      sortable: true,
      filter: true,
      headerName: "Project",
    },
  ]);
>>>>>>> dev

  const rowSelection = (e) => {
    let clientSelected = gridRef.current.api.getSelectedRows();

    setClientSelection(clientSelected[0].id);
  };

  return (
    <div
      className='ag-theme-alpine tableau'
      style={{
        height: 600,
        fontFamily: 'var(--fontBody)',
      }}
    >
      {/* <button onClick={onButtonClick}>Get selected rows</button> */}
      <AgGridReact
<<<<<<< HEAD
        // ref={gridRef}
        className='txtTableau'
        defaultColDef={defaultColDef}
        rowData={clients}
        columnDefs={columnDefs}
        rowSelection='multiple'
=======
        ref={gridRef}
        className="txtTableau"
        defaultColDef={defaultColDef}
        rowData={clients}
        columnDefs={columnDefs}
        rowSelection="single"
        onSelectionChanged={(e) => rowSelection(e)}
>>>>>>> dev
      ></AgGridReact>
    </div>
  )
}

export default TabClients
