import "./styles/PageForm.css";

import CreatableSelect from "react-select/creatable";
import { useState, useEffect } from "react";
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
  const [contactsOptions, setContactsOptions] = useState([]);
  const [companyOptions, setCompanyOptions] = useState([]);
  const [pastCompaniesOptions, setPastCompaniesOptions] = useState([]);
  const [projectsOptions, setProjectsOptions] = useState([]);
  const [induOptions, setInduOptions] = useState([]);
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
  const [induSelected, setInduSelected] = useState([]);
  const [error, setError] = useState(false);

  const [optionHasChanged, setOptionHasChanged] = useState([]);
  const [newOptions, setNewOptions] = useState([]);

  useEffect(() => {
    const getOptions = () => {
      axios
        .get("http://localhost:4040/experts/form")
        .then(
          (res) => console.log("test bdd", res.data) || setOptions(res.data)
        );
    };
    getOptions();
  }, [newOptions]);

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
    setInduOptions(options.industry);
  }, [options]);

  /* ******************* START FUNCTION WHEN WE CREATE OPTION **************   */

  const handleCreate = (inputValue, table, column, set, selected) => {
    console.log("inputValue", inputValue);
    for (let i = 0; i < inputValue.length; i++) {
      // If the Value is New
      if (Object.keys(inputValue[i]).includes("__isNew__")) {
        const newValue = {
          value: inputValue[i].value,
          table: table,
          column: column,
        };
        console.log("newValue", newValue);
        axios
          .post("http://localhost:4040/experts/test", newValue)
          .then(
            (res) =>
              console.log("datas du back", res.data) ||
              set([...selected, res.data])
          )
          .catch(function (error) {
            console.log(error);
          });
        // If the Value Is in DATABASE
      } else if (!selected.includes(inputValue[i])) {
        set([...selected, inputValue[i]]);
      }
    }

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

  useEffect(() => {
    console.log("langSelected", yoeSelected);
  }, [yoeSelected]);

  /* ******************* START FUNCTION WHEN WE SUBMIT THE FORMULARE **************   */

  const onSubmit = (data) => {
    console.log(
      "yoe",
      yoeSelected,
      "cie",
      cieSelected,
      "job",
      jobSelected,
      "pr",
      practiceSelected,
      "koe",
      koeSelected
    );
    if (
      yoeSelected.length !== 0 &&
      cieSelected.length !== 0 &&
      jobSelected.length !== 0 &&
      induSelected.length !== 0 &&
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
      let induDatas = [];
      const practice_id = practiceSelected.id;

      geoSelected.forEach((geo) => geoDatas.push(geo.id));
      langSelected.forEach((lang) => langDatas.push(lang.id));
      pcieSelected.forEach((pcie) => pcieDatas.push(pcie.id));
      ctcSelected.forEach((ctc) => ctcDatas.push(ctc.id));
      pjtSelected.forEach((pjt) => pjtDatas.push(pjt.id));
      cieSelected.forEach((cie) => cieDatas.push(cie.id));
      koeSelected.forEach(
        (koe) => console.log("koe test", koe) || koeDatas.push(koe.id)
      );
      yoeSelected.forEach((yoe) => yoeDatas.push(yoe.id));
      jobSelected.forEach((job) => jobDatas.push(job.id));
      induSelected.forEach((indu) => induDatas.push(indu.id));

      let geoExpertise_id = { geoExpertise_id: [...geoDatas] };
      let languages_id = { languages_id: [...langDatas] };
      let pastCompany_id = { pastCompany_id: [...pcieDatas] };
      let contactType_id = { contactType_id: [...ctcDatas] };
      let projects_id = { projects_id: [...pjtDatas] };
      let company_id = { company_id: [...cieDatas] };
      let kindOfExpert_id = { kindOfExpert_id: [...koeDatas] };
      let expertiseLevel_id = { expertiseLevel_id: [...yoeDatas] };
      let jobtitle_id = { jobtitle_id: [...jobDatas] };
      let industry_id = { industry_id: [...induDatas] };

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
        ...industry_id,
      };

      console.log("datas", datas);
      axios.post("http://localhost:4040/experts/", datas);

      navigate("/experts");
      console.log("lang submit", langSelected);
    } else {
      setError(true);
      console.log("Form error", yoeSelected);
      data.preventDefault();
    }
  };

  /* ******************* END FUNCTION WHEN WE SUBMIT THE FORMULARE **************   */

  return (
    <div className="tabContainerForm ">
      <div className="pageForm">
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="xl"
          className="circle"
          onClick={() => navigate(-1)}
        />
        <form
          className="pageFormInside"
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
              <CreatableSelect
                closeMenuOnSelect={false}
                options={contactsOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => {
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
                onChange={(e) => setPjtSelected(e)}
              />
            </div>

            <div className="columnsSelect">
              <label htmlFor="kindOfExpertOptions">Type</label>
              <CreatableSelect
                options={kindOfExpertOptions}
                className="basic-multi-select"
                classNamePrefix={
                  error && koeSelected.length === 0 ? "novalidated" : "select"
                }
                onChange={(e) => {
                  handleCreate(
                    [e],
                    "kindofexpert",
                    "kindOfExpertName",
                    setKoeSelected,
                    koeSelected
                  );
                }}
              />
            </div>
            {console.log("length", koeSelected.length)}

            <div className="columnsSelect">
              <label htmlFor="geoExpertise">Geo Expertise</label>
              <CreatableSelect
                closeMenuOnSelect={false}
                options={geoExpertiseOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                defaultValue={selectedOptions}
                onChange={(e) => {
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
                onChange={(e) => setPracticeSelected(e)}
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="jobTitle">Job Title</label>
              <CreatableSelect
                options={jobTitleOptions}
                className="basic-multi-select"
                classNamePrefix={
                  error && jobSelected.length === 0 ? "novalidated" : "select"
                }
                onChange={(e) => {
                  handleCreate(
                    [e],
                    "jobtitle",
                    "jobTitleName",
                    setJobSelected,
                    jobSelected
                  );
                }}
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="industry">Industries</label>
              <CreatableSelect
                closeMenuOnSelect={false}
                options={induOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) =>
                  handleCreate(
                    e,
                    "industry",
                    "industryName",
                    setInduSelected,
                    induSelected
                  )
                }
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="companyOptions">Company</label>
              <CreatableSelect
                options={companyOptions}
                className="basic-multi-select"
                classNamePrefix={
                  error && cieSelected.length === 0 ? "novalidated" : "select"
                }
                onChange={(e) => {
                  handleCreate(
                    [e],
                    "company",
                    "companyName",
                    setCieSelected,
                    cieSelected
                  );
                }}
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="pastCompaniesOptions">Past Companies</label>
              <CreatableSelect
                closeMenuOnSelect={false}
                options={pastCompaniesOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) =>
                  handleCreate(
                    e,
                    "company",
                    "companyName",
                    setPcieSelected,
                    pcieSelected
                  )
                }
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
              <CreatableSelect
                options={yearsOfExperienceOptions}
                className="basic-multi-select"
                classNamePrefix={
                  error && yoeSelected.length === 0 ? "novalidated" : "select"
                }
                onChange={(e) => {
                  handleCreate(
                    [e],
                    "expertiselevel",
                    "expertiseLevelName",
                    setYoeSelected,
                    yoeSelected
                  );
                }}
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
                onChange={(e) =>
                  handleCreate(
                    e,
                    "languages",
                    "languagesName",
                    setLangSelected,
                    langSelected
                  )
                }
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
            <button className="buttonAddForm"> Add </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageExpert;
