import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import "./styles/TabClients.css";

const TabClients = () => {
  // const [rowData, setRowData] = useState([]);
  // const gridRef = useRef(null);

  const defaultColDef = {
    resizable: true,
};

// useEffect(() => {
//       fetch('')
//       .then(result => result.json())
//       .then(rowData => setRowData(rowData))
//       }, []);

  // const onButtonClick = e => {
  //       const selectedNodes = gridRef.current.api.getSelectedNodes()
  //       const selectedData = selectedNodes.map( node => node.data )
  //       const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
  //       alert(`Selected nodes: ${selectedDataStringPresentation}`)
  //   }

  const [rowData] = useState([
    {Num: 1, Firstname: 'BOB', Lastname: 'bob', Phone: 1111, Email:'bob@gmail.com', 
    ContactPref: 'phone', Company:'hosto', CompanyType: 'corporate', City: 'paris', 
    Languages: 'french', Service: 'call', Feedback: 'blabla',Projects: '1', Keywords: 'key'}, 
    {Num: 2, Firstname: 'JOHN', Lastname: 'john', Phone: 1111, Email:'john@gmail.com', 
    ContactPref: 'mail', Company:'bloc', CompanyType: 'management', City: 'nice', 
    Languages: 'french', Service: 'call', Feedback: 'blabla',Projects: '2', Keywords: 'key'}, 
    {Num: 3, Firstname: 'ALAN', Lastname: 'alan', Phone: 1111, Email:'alan@gmail.com', 
    ContactPref: 'phone', Company:'clic', CompanyType: 'xxx', City: 'bordeaux', 
    Languages: 'french', Service: 'call', Feedback: 'blabla',Projects: '3', Keywords: 'key'}, 
  ]);

const [columnDefs] = useState([
    { field: 'Num', sortable: true, filter: true, checkboxSelection: true, pinned: 'left', lockPinned: true, width: '120px'},
    { field: 'Firstname', sortable: true, filter: true, pinned: 'left', lockPinned: true, width: '160px'},
    { field: 'Lastname',sortable: true, filter: true, pinned: 'left', lockPinned: true, width: '160px'},
    { field: 'Phone'},
    { field: 'Email'},
    { field: 'ContactPref',sortable: true, filter: true},
    { field: 'Company',sortable: true,filter: true},
    { field: 'CompanyType',sortable: true,filter: true},
    { field: 'City',sortable: true,filter: true},
    { field: 'Languages',sortable: true,filter: true},
    { field: 'Service',sortable: true,filter: true},
    { field: 'Feedback'},
    { field: 'Projects',sortable: true,filter: true},
    { field: 'Keywords',sortable: true,filter: true},
]);     

return (
    <div className="ag-theme-alpine" style={{height: 600, width: '87%'}}>
      {/* <button onClick={onButtonClick}>Get selected rows</button> */}
        <AgGridReact
            // ref={gridRef}
            defaultColDef={defaultColDef}
            rowData={rowData}
            columnDefs={columnDefs}
            rowSelection="multiple">
        </AgGridReact>
    </div>
);
}


export default TabClients