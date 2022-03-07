import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import axios from "axios";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import "./styles/TabExperts.css";

const TabExperts = () => {
  // const gridRef = useRef(null);
  const [experts, setExperts] = useState([]);

  const defaultColDef = {
    resizable: true,
  };

  useEffect(() => {
    axios
      .get("http://localhost:4040/experts")
      .then((res) => res.data)
      .then((res) => /* console.log("experts", res) || */ setExperts(res));
  }, []);

  // const onButtonClick = e => {
  //       const selectedNodes = gridRef.current.api.getSelectedNodes()
  //       const selectedData = selectedNodes.map( node => node.data )
  //       const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
  //       alert(`Selected nodes: ${selectedDataStringPresentation}`)
  //   }

  // const [rowData] = useState([
  //   {
  //     Num: 1,
  //     Firstname: "BOB",
  //     Lastname: "bob",
  //     Phone: 1111,
  //     Email: "bob@gmail.com",
  //     LinkedInProfile: "BobIn",
  //     ContactPref: "phone",
  //     Type: "doc",
  //     Practice: "private",
  //     JobTitle: "doc",
  //     YearsOfExp: "junior",
  //     Company: "hosto",
  //     PastCompanies: "clinic",
  //     GeoExpertise: "france",
  //     Languages: "french",
  //     PriceHr: "500",
  //     CostHr: "300",
  //     Feedback: "blabla",
  //     Answer: "Yes",
  //     PreferredITWday: "11",
  //     Projects: "1",
  //     Keywords: "key",
  //   },
  //   {
  //     Num: 2,
  //     Firstname: "JOHN",
  //     Lastname: "john",
  //     Phone: 2222,
  //     Email: "john@gmail.com",
  //     LinkedInProfile: "JohnIn",
  //     ContactPref: "mail",
  //     Type: "finance",
  //     Practice: "private",
  //     JobTitle: "finance",
  //     YearsOfExp: "senior",
  //     Company: "bank",
  //     PastCompanies: "bank",
  //     GeoExpertise: "england",
  //     Languages: "english",
  //     PriceHr: "700",
  //     CostHr: "400",
  //     Feedback: "blabla",
  //     Answer: "NO",
  //     PreferredITWday: "15",
  //     Projects: "2",
  //     Keywords: "key2",
  //   },
  //   {
  //     Num: 3,
  //     Firstname: "ALAN",
  //     Lastname: "alan",
  //     Phone: 3333,
  //     Email: "alan@gmail.com",
  //     LinkedInProfile: "AlanIn",
  //     ContactPref: "mail",
  //     Type: "doc",
  //     Practice: "public",
  //     JobTitle: "scientist",
  //     YearsOfExp: "senior",
  //     Company: "hosto",
  //     PastCompanies: "perso",
  //     GeoExpertise: "spanish",
  //     Languages: "sphanis, english",
  //     PriceHr: "300",
  //     CostHr: "200",
  //     Feedback: "blabla",
  //     Answer: "Yes",
  //     PreferredITWday: "20",
  //     Projects: "2",
  //     Keywords: "key3",
  //   },
  // ]);

  const [columnDefs] = useState([
    {
      field: "numExpert",
      sortable: true,
      filter: true,
      checkboxSelection: true,
      pinned: "left",
      lockPinned: true,
      width: "120px",
    },
    {
      field: "firstname",
      sortable: true,
      filter: true,
      pinned: "left",
      lockPinned: true,
      width: "160px",
    },
    {
      field: "lastname",
      sortable: true,
      filter: true,
      pinned: "left",
      lockPinned: true,
      width: "160px",
    },
    { field: "phone" },
    { field: "email" },
    { field: "linkedinProfile", sortable: true, filter: true },
    { field: "contact", sortable: true, filter: true },
    { field: "kindOfExpertName", sortable: true, filter: true },
    { field: "practiceType", sortable: true, filter: true },
    { field: "jobTitleName", sortable: true, filter: true },
    { field: "expertiseLevelName", sortable: true, filter: true },
    { field: "companyName", sortable: true, filter: true },
    { field: "pastCompanies", sortable: true, filter: true },
    { field: "geoExpertiseName", sortable: true, filter: true },
    { field: "languages", sortable: true, filter: true },
    { field: "price", sortable: true, filter: true },
    { field: "cost", sortable: true, filter: true },
    { field: "feedbackExpert" },
    { field: "answer", sortable: true, filter: true },
    { field: "itwday", sortable: true, filter: true },
    { field: "projet", sortable: true, filter: true },
    { field: "keywords", sortable: true, filter: true },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: "87%" }}>
      {/* <button onClick={onButtonClick}>Get selected rows</button> */}
      <AgGridReact
        // ref={gridRef}
        defaultColDef={defaultColDef}
        rowData={experts}
        columnDefs={columnDefs}
        rowSelection="multiple"
      ></AgGridReact>
    </div>
  );
};

export default TabExperts;
