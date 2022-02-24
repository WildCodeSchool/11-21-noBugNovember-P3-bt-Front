import { DataGrid } from '@mui/x-data-grid';


import "./styles/Tab.css";


const TabExperts = () => {

    function isOverflown(element) {
        return (
          element.scrollHeight > element.clientHeight ||
          element.scrollWidth > element.clientWidth
        );
      }

  return (
    <div className='tab'>
    <div style={{ height: 300, width: '90%' }}>
        <DataGrid 
            // rows={}
            columns={[
                { field: 'num_expert', headerName: 'N°', width: 150 },
                { field: 'firstname', headerName: 'Firstname', width: 150 },
                { field: 'lastname', headerName: 'Lastname', width: 150 },
                { field: 'phone', headerName: 'Phone', width: 150 },
                { field: 'email', headerName: 'Email', width: 150 },
                { field: 'linkedin_profile', headerName: 'LinkedIn Profile', width: 150 },
                { field: 'contact_type', headerName: 'Contact Pref.', width: 150 },
                { field: 'kind_of_expert', headerName: 'Type', width: 150 },
                { field: 'practice', headerName: 'Practice', width: 150 },
                { field: 'job_title', headerName: 'Job title', width: 150 },
                { field: 'expertise_level', headerName: 'Years of exp', width: 150 },
                { field: 'company', headerName: 'Company', width: 150 },
                { field: 'past_company', headerName: 'Past companies', width: 150 },
                { field: 'geo_expertise', headerName: 'Geo Expertise', width: 150 },
                { field: 'languages', headerName: 'Languages', width: 150 },
                { field: 'price/hr', headerName: 'Price/hr', width: 150 },
                { field: 'cost/hr', headerName: 'Cost/hr', width: 150 },
                { field: 'feedback_expert', headerName: 'Feedback', width: 150 },
                { field: 'answer', headerName: 'Answer(yes/no)', width: 150 },
                { field: 'itwday', headerName: 'Preferred ITW day', width: 150 },
                { field: 'projects', headerName: 'Projects', width: 150 },
                { field: 'keywords', headerName: 'Keywords', width: 150 },
            ]}
        />
    </div>
    </div>
  );
}

export default TabExperts