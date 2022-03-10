import "./styles/PageExpert.css";

import CreatableSelect from "react-select/creatable";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const PageExpertEdit = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [options, setOptions] = useState([]);
  const [languagesOptions, setLanguagesOptions] = useState([]);
  const [geoExpertiseOptions, setGeoExpertiseOptions] = useState([]);
  const [kindOfExpertOptions, setKindOfExpertOptions] = useState([]);
  const [yearsOfExperienceOptions, setYearsOfExperienceOptions] = useState([]);
  const [practiceOptions, setPracticeOptions] = useState([]);
  const [jobTitleOptions, setJobTitleOptions] = useState([]);
  const [contactsOptions, setContactsOptions] = useState([]);
  const [companyOptions, setCompanyOptions] = useState([]);
  const [pastCompaniesOptions, setPastCompaniesOptions] = useState([]);
  const [projectsOptions, setProjectsOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [geoSelected, setGeoSelected] = useState([]);
  const [langSelected, setLangSelected] = useState([]);
  const [practiceSelected, setPracticeSelected] = useState([]);
  const [jobSelected, setJobSelected] = useState([]);
  const [koeSelected, setKoeSelected] = useState([]);
  const [yoeSelected, setYoeSelected] = useState([]);
  const [cieSelected, setCieSelected] = useState([]);
  const [pcieSelected, setPcieSelected] = useState([]);
  const [ctcSelected, setCtcSelected] = useState([]);
  const [pjtSelected, setPjtSelected] = useState([]);
  const [numExpertSelected, setNumExpertSelected] = useState([]);
  const [firstNameSelected, setFirstNameSelected] = useState([]);
  const [lastNameSelected, setLastNameSelected] = useState([]);
  const [phoneSelected, setPhoneSelected] = useState([]);
  const [emailSelected, setEmailSelected] = useState([]);
  const [linkedinSelected, setLinkedinSelected] = useState([]);
  const [error, setError] = useState(false);
  const [optionHasChanged, setOptionHasChanged] = useState([]);
  const [newOptions, setNewOptions] = useState([]);
  // const [newData, setNewData] = useState([]);

  //   State des Data de l'expert
  const [dataExpert, setDataExpert] = useState([]);

  //  ********************   DONNE BDD EXPERT ***************************

  useEffect(() => {
    const getOptions = () => {
      axios
        .get(`http://localhost:4040/experts/form`)
        .then((res) => setOptions(res.data));
    };
    getOptions();
  }, [newOptions]);

  //*****  Decompose la BDD ****
  useEffect(() => {
    setLanguagesOptions(options.languages);
    setGeoExpertiseOptions(options.geoExpertise);
    setKindOfExpertOptions(options.kindOfExpert);
    setYearsOfExperienceOptions(options.expertiseLevel);
    setPracticeOptions(options.practice);
    setJobTitleOptions(options.jobTitle);
    setContactsOptions(options.contactType);
    setCompanyOptions(options.companies);
    setPastCompaniesOptions(options.companies);
    setProjectsOptions(options.projects);
  }, [options]);

  // ********************   DATA EXPERT ***************************

  useEffect(() => {
    const dataExpertFunc = () => {
      axios.get(`http://localhost:4040/experts/form/${id}`).then((res) => {
        console.log("rest.data", res.data) || setDataExpert(res.data);
        setNumExpertSelected(res.data.numExpert);
        setFirstNameSelected(res.data.firstname);
        setLastNameSelected(res.data.lastname);
        setPhoneSelected(res.data.phone);
        setEmailSelected(res.data.email);
        setLinkedinSelected(res.data.linkedinProfile);
        setCieSelected(res.data.company);
        setPracticeSelected(res.data.practice);
        setKoeSelected(res.data.kindOfExpert);
        setYoeSelected(res.data.expertiseLevel);
        setLangSelected(res.data.languages);
        setPcieSelected(res.data.pastCompanies);
        setJobSelected(res.data.jobTitleName);
        setPjtSelected(res.data.projects);
        setCtcSelected(res.data.contact);
        setGeoSelected(res.data.geoExpertiseName);
      });
    };
    dataExpertFunc();
  }, []);

  /* ******************* START FUNCTION WHEN WE CREATE OPTION **************   */

  const handleCreate = async (
    inputValue,
    table,
    column,
    set,
    selected,
    multiple,
    option
  ) => {
    console.log("inputValue", inputValue);
    let newDataPoulet = [];

    console.log("newDataPoulet initial", newDataPoulet);
    for (let i = 0; i < inputValue.length; i++) {
      let temp = [];
      // If the Value is New
      if (Object.keys(inputValue[i]).includes("__isNew__")) {
        const newValue = {
          value: inputValue[i].value,
          table: table,
          column: column,
        };
        temp = await axios
          .post("http://localhost:4040/experts/test", newValue)
          .then((res) => {
            return res.data;

            // setNewData(...newDataPoulet, res.data);

            // if (multiple === "solo") {
            //   newDataPoulet = res.data;
            //   // setNewData([res.data]);
            // } else {
            //   console.log("selected new", selected);
            //   newDataPoulet.push(res.data);
            //   // setNewData(...newDataPoulet, res.data);
            // }
          })
          .catch(function (error) {
            console.log(error);
          });
        if (multiple === "solo") {
          console.log("solo temp", temp);
          newDataPoulet = temp;
          // setNewData([res.data]);
        } else {
          console.log("multi temp", temp);
          console.log("selected new", selected);
          console.log("multi data", newDataPoulet);
          // newDataPoulet.push(temp);
          newDataPoulet = [...newDataPoulet, temp];
          console.log("last newDataPoulet", newDataPoulet);
          // setNewData(...newDataPoulet, res.data);
        }

        // If the Value Is in DATABASE
      } else {
        if (multiple === "solo") {
          const goodOpt = option.filter(
            (el) => el.value === inputValue[i].value
          );
          console.log("g1", goodOpt);
          newDataPoulet = goodOpt;
          // setNewData(goodOpt);

          // console.log("g1 data", newDataPoulet);
        } else {
          console.log("selected not new", selected);
          const goodOpt2 = option.filter(
            (el) => el.value === inputValue[i].value
          );
          // console.log("good option 2", goodOpt2);
          // console.log("g2 data1", newDataPoulet);
          newDataPoulet.push(...goodOpt2);

          // setNewData([...newDataPoulet, ...goodOpt2]);
          // console.log("g2 data2", newDataPoulet);
        }
      }
    }
    console.log("newDataPoulet 2", newDataPoulet);
    set(newDataPoulet);
    // let filtered = inputValue.filter((el) =>
    //   Object.keys(el).includes("__isNew__")
    // );
    // for (let i = 0; i < filtered.length; i++) {
    //   if (newOptions.includes(filtered[i].value)) {
    //     console.log("deja existant :", filtered[i]);
    //   } else {
    //     setNewOptions(...newOptions, filtered[i].value);
    //     const newValue = {
    //       value: filtered[i].value,
    //       table: table,
    //       column: column,
    //     };
    //     console.log("newValue", newValue);
    //     axios
    //       .post("http://localhost:4040/experts/test", newValue)
    //       .then((res) => setLangSelected([...langSelected, res.data]))
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   }
    // }
  };
  /* ******************* START FUNCTION WHEN WE SUBMIT THE FORMULARE **************   */

  // const updateTest = () => {
  //   axios.put("http://localhost:4040/experts/form/5", {
  //     name: "Matt",
  //     lastname: "Vimbert",
  //     lol: undefined,
  //     ville: "Bordeaux",
  //     geo: [],
  //     stringvide: "",
  //   });
  // };

  const onSubmit = (data) => {
    if (
      yoeSelected.length !== 0 &&
      cieSelected.length !== 0 &&
      jobSelected.length !== 0 &&
      practiceSelected &&
      koeSelected.length !== 0
    ) {
      setError(false);
      let geoDatas = [];
      let langDatas = [];
      let pcieDatas = [];
      let ctcDatas = [];
      let pjtDatas = [];
      let cieDatas = [];
      let koeDatas = [];
      let yoeDatas = [];
      let jobDatas = [];
      const practice_id = practiceSelected.id;
      geoSelected.forEach((geo) => geoDatas.push(geo.id));
      langSelected.forEach((lang) => langDatas.push(lang.id));
      pcieSelected.forEach((pcie) => pcieDatas.push(pcie.id));
      ctcSelected.forEach((ctc) => ctcDatas.push(ctc.id));
      pjtSelected.forEach((pjt) => pjtDatas.push(pjt.id));
      console.log("coucouthomash", cieSelected);
      cieSelected.forEach((cie) => cieDatas.push(cie.id));
      koeSelected.forEach(
        (koe) => console.log("koe test", koe) || koeDatas.push(koe.id)
      );
      yoeSelected.forEach((yoe) => yoeDatas.push(yoe.id));
      jobSelected.forEach((job) => jobDatas.push(job.id));
      let geoExpertise_id = { geoExpertise_id: [...geoDatas] };
      let languages_id = { languages_id: [...langDatas] };
      let pastCompany_id = { pastCompany_id: [...pcieDatas] };
      let contactType_id = { contactType_id: [...ctcDatas] };
      let projects_id = { projects_id: [...pjtDatas] };
      let company_id = { company_id: [...cieDatas] };
      let kindOfExpert_id = { kindOfExpert_id: [...koeDatas] };
      let expertiseLevel_id = { expertiseLevel_id: [...yoeDatas] };
      let jobtitle_id = { jobtitle_id: [...jobDatas] };
      let datas = {
        ...data,
        ...geoExpertise_id,
        ...languages_id,
        ...jobtitle_id,
        ...kindOfExpert_id,
        practice_id,
        ...pastCompany_id,
        ...contactType_id,
        ...projects_id,
        ...company_id,
        ...expertiseLevel_id,
      };
      console.log("datas", datas);
      // axios.post("http://localhost:4040/experts/", datas);
      // navigate("/experts");
    } else {
      setError(true);
      console.log("Form error", yoeSelected);
      data.preventDefault();
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
                  value={numExpertSelected}
                  onChange={(e) => setNumExpertSelected(e.target.value)}
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
                value={firstNameSelected}
                onChange={(e) => setFirstNameSelected(e.target.value)}
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
                value={lastNameSelected}
                onChange={(e) => setLastNameSelected(e.target.value)}
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
                value={phoneSelected}
                onChange={(e) => setPhoneSelected(e.target.value)}
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
                value={emailSelected}
                onChange={(e) => setEmailSelected(e.target.value)}
              ></input>
            </div>
            <div className="columnsDiv">
              <label htmlFor="linkedin">Linkedin Profile</label>
              <input
                id="linkedin"
                name="linkedin"
                type="text"
                role="presentation"
                {...register("linkedinProfile")}
                value={linkedinSelected}
                onChange={(e) => setLinkedinSelected(e.target.value)}
              ></input>
            </div>
            <div className="columnsSelect">
              <label htmlFor="contactOptions">Contact Preferences</label>
              <CreatableSelect
                value={ctcSelected}
                closeMenuOnSelect={false}
                options={contactsOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => {
                  setCtcSelected(e);
                  handleCreate(
                    e,
                    "contacttype",
                    "contactTypeName",
                    setCtcSelected,
                    ctcSelected
                  );
                }}
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
                value={pjtSelected}
                onChange={(e) => setPjtSelected(e)}
              />
            </div>

            <div className="columnsSelect">
              <label htmlFor="kindOfExpertOptions">Type</label>
              <CreatableSelect
                value={koeSelected}
                options={kindOfExpertOptions}
                className="basic-multi-select"
                classNamePrefix={
                  error && koeSelected.length === 0 ? "novalidated" : "select"
                }
                // value={datatest.kindOfExpertName}
                onChange={(e) => {
                  setKoeSelected([e]);
                  handleCreate(
                    [e],
                    "kindofexpert",
                    "kindOfExpertName",
                    setKoeSelected,
                    koeSelected,
                    "solo"
                  );
                }}
              />
            </div>

            <div className="columnsSelect">
              <label htmlFor="geoExpertise">Geo Expertise</label>
              <CreatableSelect
                value={geoSelected}
                closeMenuOnSelect={false}
                options={geoExpertiseOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => {
                  setGeoSelected(e);
                  handleCreate(
                    e,
                    "geoexpertise",
                    "geoExpertiseName",
                    setGeoSelected,
                    geoSelected
                  );
                }}
              />
            </div>

            <div className="columnsSelect">
              <label htmlFor="practice">Practice</label>
              <Select
                options={practiceOptions}
                className="basic-multi-select"
                classNamePrefix={
                  error && !practiceSelected ? "novalidated" : "select"
                }
                value={practiceSelected}
                onChange={(e) => setPracticeSelected(e)}
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="jobTitle">Job Title</label>
              <CreatableSelect
                value={jobSelected}
                options={jobTitleOptions}
                className="basic-multi-select"
                classNamePrefix={
                  error && jobSelected.length === 0 ? "novalidated" : "select"
                }
                onChange={(e) => {
                  setJobSelected([e]);
                  handleCreate(
                    [e],
                    "jobtitle",
                    "jobTitleName",
                    setJobSelected,
                    jobSelected,
                    "solo"
                  );
                }}
              />
            </div>

            <div className="columnsSelect">
              <label htmlFor="companyOptions">Company</label>
              <CreatableSelect
                value={cieSelected}
                options={companyOptions}
                className="basic-multi-select"
                classNamePrefix={
                  error && cieSelected.length === 0 ? "novalidated" : "select"
                }
                onChange={(e) => {
                  setCieSelected([e]);
                  handleCreate(
                    [e],
                    "company",
                    "companyName",
                    setCieSelected,
                    cieSelected,
                    "solo"
                  );
                }}
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="pastCompaniesOptions">Past Companies</label>
              <CreatableSelect
                value={pcieSelected}
                closeMenuOnSelect={false}
                options={pastCompaniesOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => {
                  setPcieSelected(e);
                  handleCreate(
                    e,
                    "company",
                    "companyName",
                    setPcieSelected,
                    pcieSelected,
                    "multiple",
                    pastCompaniesOptions
                  );
                }}
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
                value={dataExpert.price}
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
                value={dataExpert.cost}
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
                value={dataExpert.feedbackExpert}
              ></textarea>
            </div>
            <div className="columnsSelect">
              <label htmlFor="experience">Years of Experience</label>
              <CreatableSelect
                value={yoeSelected}
                options={yearsOfExperienceOptions}
                className="basic-multi-select"
                classNamePrefix={
                  error && yoeSelected.length === 0 ? "novalidated" : "select"
                }
                onChange={(e) => {
                  setYoeSelected([e]);
                  handleCreate(
                    [e],
                    "expertiselevel",
                    "expertiseLevelName",
                    setYoeSelected,
                    yoeSelected,
                    "solo"
                  );
                }}
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="languages">Languages</label>
              <CreatableSelect
                value={langSelected}
                closeMenuOnSelect={false}
                options={languagesOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => {
                  setLangSelected(e);
                  handleCreate(
                    e,
                    "languages",
                    "languagesName",
                    setLangSelected,
                    langSelected
                  );
                }}
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
                value={dataExpert.keywords}
              ></input>
            </div>
          </div>
          <div className="checkOrTrash">
            <button onClick={() => onSubmit()}> Add </button>
            <FontAwesomeIcon icon={faTrashCan} size="lg" className="trashCan" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageExpertEdit;
