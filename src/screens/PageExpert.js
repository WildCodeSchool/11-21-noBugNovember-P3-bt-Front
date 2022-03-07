import "./styles/PageExpert.css";

import CreatableSelect from 'react-select/creatable';
import { useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const PageExpert = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [options, setOptions] = useState([]);
  const [languagesOptions, setLanguagesOptions] = useState([]);
  const [geoExpertiseOptions, setGeoExpertiseOptions] = useState([]);
  const [kindOfExpertOptions, setKindOfExpertOptions] = useState([]);
  const [yearsOfExperienceOptions, setYearsOfExperienceOptions] = useState([]);
  const [practiceOptions, setPracticeOptions] = useState([]);
  const [jobTitleOptions, setJobTitleOptions] = useState([]);
  const [contactsOptions, setContactsOptions] = useState([])
  const [companyOptions, setCompanyOptions] = useState([])
  const [pastCompaniesOptions, setPastCompaniesOptions] = useState([])
  const [projectsOptions, setProjectsOptions] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [geoSelected, setGeoSelected] = useState([]);
  const [langSelected, setLangSelected] = useState([])
  const [practiceSelected, setPracticeSelected] = useState(false)
  const [jobSelected, setJobSelected] = useState(false)
  const [koeSelected, setKoeSelected] = useState(false)
  const [yoeSelected, setYoeSelected] = useState(false)
  const [cieSelected, setCieSelected] = useState(false)
  const [pcieSelected, setPcieSelected] = useState([])
  const [ctcSelected, setCtcSelected] = useState([])
  const [pjtSelected, setPjtSelected] = useState([])
  const [error, setError] = useState(false)


  useEffect(() => {
    const getOptions = () => {
      axios
        .get("http://localhost:4040/experts/form")
        .then((res) => console.log("res.data", res.data) || setOptions(res.data));
    };
    getOptions();
  }, []);

  useEffect(() => {
    setLanguagesOptions(options.languages);
    setGeoExpertiseOptions(options.geoExpertise);
    setKindOfExpertOptions(options.kindOfExpert);
    setYearsOfExperienceOptions(options.expertiseLevel);
    setPracticeOptions(options.practice);
    setJobTitleOptions(options.jobTitle);
    setContactsOptions(options.contactType)
    setCompanyOptions(options.companies)
    setPastCompaniesOptions(options.companies)
    setProjectsOptions(options.projects)
  }, [options]);
  /* ******************* START FUNCTION WHEN WE CREATE OPTION **************   */

  const handleCreate = (inputValue, table, column) => {
    const newValue = {value: inputValue, table: table, column: column}
    axios.post("http://localhost:4040/experts/test", newValue)
  }

  /* ******************* START FUNCTION WHEN WE SUBMIT THE FORMULARE **************   */

  const onSubmit = (data) => {

    if (yoeSelected && cieSelected && jobSelected && practiceSelected && koeSelected) {

    setError(false)

    let geoDatas = [];
    let langDatas = []
    let pcieDatas = []
    let ctcDatas = []
    let pjtDatas = []
    const company_id = cieSelected.id
    const kindOfExpert_id = koeSelected.id
    const expertiseLevel_id = yoeSelected.id
    const jobtitle_id = jobSelected.id
    const practice_id = practiceSelected.id


    geoSelected.forEach((geo) => geoDatas.push(geo.id));
    langSelected.forEach((lang) => langDatas.push(lang.id));
    pcieSelected.forEach((pcie) => pcieDatas.push(pcie.id));
    ctcSelected.forEach((ctc) => ctcDatas.push(ctc.id));
    pjtSelected.forEach((pjt) => pjtDatas.push(pjt.id));

    let geoExpertise_id = { geoExpertise_id: [...geoDatas] };
    let languages_id = { languages_id: [...langDatas] };
    let pastCompany_id = { pastCompany_id: [...pcieDatas] };
    let contactType_id = { contactType_id: [...ctcDatas] };
    let projects_id = { projects_id: [...pjtDatas] };

    let datas = { ...data, ...geoExpertise_id, ...languages_id, jobtitle_id, kindOfExpert_id, practice_id, ...pastCompany_id, ...contactType_id, ...projects_id, company_id, expertiseLevel_id };

    
    axios.post("http://localhost:4040/experts/", datas);
    
    navigate("/experts")
    console.log(datas)
    } else {
      setError(true)
      console.log("Form error", yoeSelected)
      data.preventDefault()
    }
  
  };
  
  /* ******************* END FUNCTION WHEN WE SUBMIT THE FORMULARE **************   */

  return (
    <div className="tabContainerExpert ">
      {" "}
      <div className="pageExpert">
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="xl"
          className="circle"
          onClick={() => navigate(-1)}
        />
        <form
          className="pageExpertForm"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="columns">
            <div id="idWrapper" className="columnsDiv">
              <h1 id="expert">EXPERT</h1>
              <div id="expertNumber">
                <label htmlFor="number">N°</label>
                <input
                  id="number"
                  name="number"
                  type="key"
                  {...register("numExpert")} 
                  required
                ></input>
              </div>
            </div>
            <div className="columnsDiv">
              <label htmlFor="firstName">FirstName</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                autocomplete="off"
                {...register("firstname")} 
                required
              ></input>
            </div>
            <div className="columnsDiv">
              <label htmlFor="lastName">LastName</label>
              <input
                autocomplete="off"
                id="lastName"
                name="lastName"
                type="text"
                {...register("lastname")} 
                required
              ></input>
            </div>
            <div className="columnsDiv">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                role="presentation"
                autocomplete="off"
                {...register("phone")}
              ></input>
            </div>
            <div className="columnsDiv">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                role="presentation"
                {...register("email")}
              ></input>
            </div>
            <div className="columnsDiv">
              <label htmlFor="linkedin">Linkedin Profile</label>
              <input
                id="linkedin"
                name="linkedin"
                type="url"
                role="presentation"
                {...register("linkedinProfile")}
              ></input>
            </div>
            <div className="columnsSelect">
              <label htmlFor="contactOptions">Contact Preferences</label>
              <Select
                closeMenuOnSelect={false}
                options={contactsOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => setCtcSelected(e)}
              />
            </div>
          </div>
          <div className="columns">
            <div className="columnsDiv">
              <label htmlFor="projectOptions">Projects</label>
              <Select
                closeMenuOnSelect={false}
                options={projectsOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => setPjtSelected(e)}
              />
            </div>

            <div className="columnsSelect">
              <label htmlFor="kindOfExpertOptions">Type</label>
              <Select
                options={kindOfExpertOptions}
                className="basic-multi-select"
                classNamePrefix={error && !koeSelected ? "novalidated" : "select"}
                onChange={(e) => setKoeSelected(e)}  
              />
            </div>

            <div className="columnsSelect">
              <label htmlFor="geoExpertise">Geo Expertise</label>
              <Select
                closeMenuOnSelect={false}
                options={geoExpertiseOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                defaultValue={selectedOptions}
                onChange={(e) => setGeoSelected(e)}
              />
            </div>
            
            <div className="columnsSelect">
              <label htmlFor="practice">Practice</label>
              <Select
                options={practiceOptions}
                className="basic-multi-select"
                classNamePrefix={error && !practiceSelected ? "novalidated" : "select"}
                onChange={(e) => setPracticeSelected(e)}
                
                
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="jobTitle">Job Title</label>
              <Select
                options={jobTitleOptions}
                className="basic-multi-select"
                classNamePrefix={error && !jobSelected ? "novalidated" : "select"}
                onChange={(e) => setJobSelected(e)}
                
              />
            </div>

            <div className="columnsSelect">
              <label htmlFor="companyOptions">Company</label>
              <Select
                options={companyOptions}
                className="basic-multi-select"
                classNamePrefix={error && !cieSelected? "novalidated" : "select"}
                onChange={(e) => setCieSelected(e)}
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="pastCompaniesOptions">Past Companies</label>
              <Select
                closeMenuOnSelect={false}
                options={pastCompaniesOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => setPcieSelected(e)}
              />
            </div>
          </div>
          <div className="columns">
            <div className="columnsDiv">
              <label htmlFor="price/hr">Price/hr</label>
              <input
                id="price/hr"
                name="price/hr"
                type="number"
                role="presentation"
                {...register("price")}
              ></input>
            </div>
            <div className="columnsDiv">
              <label htmlFor="cost">Cost/hr</label>
              <input
                id="cost"
                name="cost"
                type="number"
                role="presentation"
                {...register("cost")}
              ></input>
            </div>
            <div className="columnsDiv">
              <label htmlFor="feedback">Feedback</label>
              <textarea
                id="feedback"
                name="feedback"
                rows="10"
                cols="60"
                role="presentation"
                {...register("feedbackExpert")}
              ></textarea>
            </div>
            <div className="columnsSelect">
              <label htmlFor="experience">Years of Experience</label>
              <Select
                options={yearsOfExperienceOptions}
                className="basic-multi-select"
                classNamePrefix={error && !yoeSelected? "novalidated" : "select"}
                onChange={(e) => setYoeSelected(e)}
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="languages">Languages</label>
              <CreatableSelect
                closeMenuOnSelect={false}
                options={languagesOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                // onCreateOption={(e) => handleCreate(e, "languages", "languagesName")}
                onChange={(e) => setLangSelected(e)}
              />
            </div>
            <div className="columnsDiv">
              <label htmlFor="keywords">Keywords</label>
              <input
                id="keywords"
                name="keywords"
                type="text"
                role="presentation"
                {...register("keywords")}
              ></input>
            </div>
          </div>
          <div className="checkOrTrash">
            <button> Add </button>
            <FontAwesomeIcon icon={faTrashCan} size="lg" className="trashCan" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageExpert;
