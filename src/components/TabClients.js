import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import axios from 'axios'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

import './styles/TabClients.css'

const TabClients = () => {
  const [clients, setClients] = useState([])
  // const gridRef = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:4242/clients/').then((response) => {
      setClients(response.data)
    })
  }, [])

  console.log(clients)

  const defaultColDef = {
    resizable: true,
  }

  // const onButtonClick = e => {
  //       const selectedNodes = gridRef.current.api.getSelectedNodes()
  //       const selectedData = selectedNodes.map( node => node.data )
  //       const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
  //       alert(`Selected nodes: ${selectedDataStringPresentation}`)
  //   }

  // const [rowData] = useState([clients.map(client) => (
  //   {
  //     Num: 1,
  //     Firstname: 'BOB',
  //     Lastname: 'bob',
  //     Phone: 1111,
  //     Email: 'bob@gmail.com',
  //     ContactPref: 'phone',
  //     Company: 'hosto',
  //     CompanyType: 'corporate',
  //     City: 'paris',
  //     Languages: 'french',
  //     Service: 'call',
  //     Feedback: 'blabla',
  //     Projects: '1',
  //     Keywords: 'key',
  //   })
  // ]

  const [columnDefs] = useState([
    {
      field: 'Num',
      sortable: true,
      filter: true,
      checkboxSelection: true,
      pinned: 'left',
      lockPinned: true,
      width: '120px',
    },
    {
      field: 'Firstname',
      sortable: true,
      filter: true,
      pinned: 'left',
      lockPinned: true,
      width: '160px',
    },
    {
      field: 'Lastname',
      sortable: true,
      filter: true,
      pinned: 'left',
      lockPinned: true,
      width: '160px',
    },
    { field: 'Phone' },
    { field: 'Email' },
    { field: 'ContactPref', sortable: true, filter: true },
    { field: 'Company', sortable: true, filter: true },
    { field: 'CompanyType', sortable: true, filter: true },
    { field: 'City', sortable: true, filter: true },
    { field: 'Languages', sortable: true, filter: true },
    { field: 'Service', sortable: true, filter: true },
    { field: 'Feedback' },
    { field: 'Projects', sortable: true, filter: true },
    { field: 'Keywords', sortable: true, filter: true },
  ])

  return (
    <div className='ag-theme-alpine' style={{ height: 600, width: '87%' }}>
      {/* <button onClick={onButtonClick}>Get selected rows</button> */}
      <AgGridReact
        // ref={gridRef}
        defaultColDef={defaultColDef}
        rowData={clients}
        columnDefs={columnDefs}
        rowSelection='multiple'
      ></AgGridReact>
    </div>
  )
}

export default TabClients
