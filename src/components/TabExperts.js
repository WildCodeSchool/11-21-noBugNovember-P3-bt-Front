import React, { useState, useEffect, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'
import axios from 'axios'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

import './styles/TabExperts.css'

const TabExperts = ({ setExpertSelection }) => {
  const [experts, setExperts] = useState([])

  const defaultColDef = {
    resizable: true,
  }

  const gridRef = useRef()

  useEffect(() => {
    axios
      .get('http://localhost:4040/experts')
      .then((res) => res.data)
      .then((res) => setExperts(res))
  }, [])

  // const onButtonClick = e => {
  //       const selectedNodes = gridRef.current.api.getSelectedNodes()
  //       const selectedData = selectedNodes.map( node => node.data )
  //       const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
  //       alert(`Selected nodes: ${selectedDataStringPresentation}`)
  //   }

  const [columnDefs] = useState([
    {
      field: 'numExpert',
      sortable: true,
      filter: true,
      checkboxSelection: false,
      pinned: 'left',
      lockPinned: true,
      width: '120px',
    },
    {
      field: 'firstname',
      sortable: true,
      filter: true,
      pinned: 'left',
      lockPinned: true,
      width: '160px',
    },
    {
      field: 'lastname',
      sortable: true,
      filter: true,
      pinned: 'left',
      lockPinned: true,
      width: '160px',
    },
    { field: 'phone', width: '100px' },
    { field: 'email' },
    { field: 'linkedinProfile', sortable: true, filter: true },
    { field: 'contact', sortable: true, filter: true },
    { field: 'kindOfExpertName', sortable: true, filter: true },
    { field: 'practiceType', sortable: true, filter: true },
    { field: 'jobTitleName', sortable: true, filter: true },
    { field: 'expertiseLevelName', sortable: true, filter: true },
    { field: 'companyName', sortable: true, filter: true },
    { field: 'pastCompanies', sortable: true, filter: true },
    { field: 'geoExpertiseName', sortable: true, filter: true },
    { field: 'languages', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true },
    { field: 'cost', sortable: true, filter: true },
    { field: 'feedbackExpert' },
    { field: 'itwday', sortable: true, filter: true },
    { field: 'projectTitle', sortable: true, filter: true },
    { field: 'keywords', sortable: true, filter: true },
  ])

  const testpascompris = (e) => {
    let expertSelected = gridRef.current.api.getSelectedRows()
    setExpertSelection(expertSelected[0].id)
  }

  return (
    <div
      className='ag-theme-alpine tableau'
      style={{
        height: 600,
        fontFamily: 'var(--fontBody)',
      }}
    >
      {/* <button onClick={onButtonClick}>Get selected rows</button> */}
      <AgGridReact ref={gridRef} defaultColDef={defaultColDef} rowData={experts} columnDefs={columnDefs} rowSelection='single' onSelectionChanged={(e) => testpascompris(e)}></AgGridReact>
    </div>
  )
}

export default TabExperts
