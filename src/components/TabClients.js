import React, { useState, useEffect, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'
import axios from 'axios'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

import './styles/TabClients.css'

const TabClients = ({ setClientSelection }) => {
  const [clients, setClients] = useState([])
  const gridRef = useRef()

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
      width: '120px',
      headerName: 'N°',
    },
    {
      field: 'firstname',
      sortable: true,
      filter: true,
      pinned: 'left',
      lockPinned: true,
      width: '160px',
      headerName: 'First Name',
    },
    {
      field: 'lastname',
      sortable: true,
      filter: true,
      pinned: 'left',
      lockPinned: true,
      width: '160px',
      headerName: 'Last Name',
    },
    { field: 'phone' },
    { field: 'email' },
    {
      field: 'contactType',
      sortable: true,
      filter: true,
      headerName: 'Contact',
    },
    {
      field: 'companyName',
      sortable: true,
      filter: true,
      headerName: 'Company',
    },
    { field: 'city', sortable: true, filter: true },
    { field: 'service', sortable: true, filter: true },
    { field: 'fonction', sortable: true, filter: true, headerName: 'Function' },
    { field: 'feedbackClient', headerName: 'Comment' },
    {
      field: 'numProject',
      sortable: true,
      filter: true,
      headerName: 'Project',
    },
  ])

  const rowSelection = (e) => {
    let clientSelected = gridRef.current.api.getSelectedRows()

    setClientSelection(clientSelected[0].id)
  }

  return (
    <div
      className='ag-theme-alpine tableau'
      style={{
        height: '74vh',
        fontFamily: 'var(--fontBody)',
      }}
    >
      <AgGridReact
        ref={gridRef}
        className='txtTableau'
        defaultColDef={defaultColDef}
        rowData={clients}
        columnDefs={columnDefs}
        rowSelection='single'
        onSelectionChanged={(e) => rowSelection(e)}
      ></AgGridReact>
    </div>
  )
}

export default TabClients
