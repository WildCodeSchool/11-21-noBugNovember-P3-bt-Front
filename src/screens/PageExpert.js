import "./styles/PageForm.css";

import CreatableSelect from "react-select/creatable";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
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
  const [hcpOptions, setHcpOptions] = useState([]);
  const [sectorOptions, setSectorOptions] = useState([]);
  const [fonctionOptions, setFonctionOptions] = useState([]);
  const [specialtyOptions, setSpecialtyOptions] = useState([]);

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
  const [hcpSelected, setHcpSelected] = useState([]);
  const [sctSelected, setSctSelected] = useState([]);
  const [fctSelected, setFctSelected] = useState([]);
  const [specSelected, setSpecSelected] = useState([]);
  const [error, setError] = useState(false);

  const [newOptions, setNewOptions] = useState([]);

  useEffect(() => {
    const getOptions = () => {
      axios
        .get("http://localhost:4040/experts/form")
        .then(
          (res) => console.log("test bdd", res.data) || setOptions(res.data)
        )
        .catch(function (error) {
          console.log(error);
        });
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
    setHcpOptions(options.hcptype);
    setSectorOptions(options.sector);
    setFonctionOptions(options.fonction);
    setSpecialtyOptions(options.specialty);
  }, [options]);

  /* ******************* START FUNCTION WHEN WE CREATE OPTION **************   */

  const handleCreate = (inputValue, table, column, set, selected, multiple) => {
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
          .then((res) => {
            if (multiple === "multiple") {
              set([...selected, res.data]);
            } else if (multiple === "solo") {
              set([res.data]);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        // If the Value Is in DATABASE
      } else {
        if (multiple === "multiple") {
          if (!selected.includes(inputValue[i]))
            set([...selected, inputValue[i]]);
        } else if (multiple === "solo") {
          set([inputValue[i]]);
        }
      }
    }
  };

  /* ******************* START FUNCTION WHEN WE SUBMIT THE FORMULARE **************   */

  const onSubmit = async (data) => {
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
      let hcpDatas = [];
      let sctDatas = [];
      let fctDatas = [];
      let specDatas = [];
      const practice_id = practiceSelected.id;

      geoSelected.forEach((geo) => geoDatas.push(geo.id));
      langSelected.forEach((lang) => langDatas.push(lang.id));
      pcieSelected.forEach((pcie) => pcieDatas.push(pcie.id));
      ctcSelected.forEach((ctc) => ctcDatas.push(ctc.id));
      pjtSelected.forEach((pjt) => pjtDatas.push(pjt.id));
      cieSelected.forEach((cie) => cieDatas.push(cie.id));
      koeSelected.forEach((koe) => koeDatas.push(koe.id));
      yoeSelected.forEach((yoe) => yoeDatas.push(yoe.id));
      jobSelected.forEach((job) => jobDatas.push(job.id));
      induSelected.forEach((indu) => induDatas.push(indu.id));
      hcpSelected.forEach((hcp) => hcpDatas.push(hcp.id));
      sctSelected.forEach((sct) => sctDatas.push(sct.id));
      fctSelected.forEach((fct) => fctDatas.push(fct.id));
      specSelected.forEach((spec) => specDatas.push(spec.id));

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
      let hcpType_id = { hcpType_id: [...hcpDatas] };
      let sector_id = { sector_id: [...sctDatas] };
      let fonction_id = { fonction_id: [...fctDatas] };
      let specialty_id = { specialty_id: [...specDatas] };

      let datas = {
        practice_id,
        ...data,
        ...geoExpertise_id,
        ...languages_id,
        ...jobtitle_id,
        ...kindOfExpert_id,
        ...pastCompany_id,
        ...contactType_id,
        ...projects_id,
        ...company_id,
        ...expertiseLevel_id,
        ...industry_id,
        ...hcpType_id,
        ...sector_id,
        ...fonction_id,
        ...specialty_id,
      };

      await axios
        .post("http://localhost:4040/experts/", datas)
        .catch(navigate("/experts"));
      navigate("/experts");
    } else {
      setError(true);
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
                type="text"
                role="presentation"
                {...register("linkedinProfile")}
              ></input>
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
            <div className="columnsSelect">
              <label htmlFor="fonction">Fonction</label>
              <CreatableSelect
                menuPlacement="top"
                closeMenuOnSelect={false}
                options={fonctionOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                defaultValue={selectedOptions}
                onChange={(e) => {
                  handleCreate(
                    e,
                    "fonction",
                    "fonctionName",
                    setFctSelected,
                    fctSelected,
                    "multiple"
                  );
                }}
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="contactOptions">Contact Preferences</label>
              <CreatableSelect
                menuPlacement="top"
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
                    ctcSelected,
                    "multiple"
                  );
                }}
              />
            </div>
          </div>
          <div className="columns">
            <div className="columnsDiv">
              <label htmlFor="projectOptions">Projects</label>
              <Select
                menuPlacement="top"
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
                  console.log(e);
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
                    geoSelected,
                    "multiple"
                  );
                }}
              />
            </div>

            <div className="columnsSelect">
              <label htmlFor="practice">Practice</label>
              <Select
                menuPlacement="top"
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
                menuPlacement="top"
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
                    jobSelected,
                    "solo"
                  );
                }}
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="industry">Industries</label>
              <CreatableSelect
                menuPlacement="top"
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
                    induSelected,
                    "multiple"
                  )
                }
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="companyOptions">Company</label>
              <CreatableSelect
                menuPlacement="top"
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
                    cieSelected,
                    "solo"
                  );
                }}
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="pastCompaniesOptions">Past Companies</label>
              <CreatableSelect
                menuPlacement="top"
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
                    pcieSelected,
                    "multiple"
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
                max="1000000"
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
                max="1000000"
                {...register("cost")}
              ></input>
            </div>
            <div className="columnsSelect">
              <label htmlFor="hcpType">HCP Type</label>
              <CreatableSelect
                closeMenuOnSelect={false}
                options={hcpOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) =>
                  handleCreate(
                    e,
                    "hcptype",
                    "hcpTypeName",
                    setHcpSelected,
                    hcpSelected,
                    "multiple"
                  )
                }
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="sector">Sector</label>
              <CreatableSelect
                menuPlacement="top"
                closeMenuOnSelect={false}
                options={sectorOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) =>
                  handleCreate(
                    e,
                    "sector",
                    "sectorName",
                    setSctSelected,
                    sctSelected,
                    "multiple"
                  )
                }
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="specialty">Specialty</label>
              <CreatableSelect
                menuPlacement="top"
                closeMenuOnSelect={false}
                options={specialtyOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) =>
                  handleCreate(
                    e,
                    "specialty",
                    "specialtyName",
                    setSpecSelected,
                    specSelected,
                    "multiple"
                  )
                }
              />
            </div>
            <div className="columnsDiv">
              <label htmlFor="feedback">Comment</label>
              <textarea
                id="feedback"
                name="feedback"
                rows="4"
                cols="60"
                role="presentation"
                {...register("feedbackExpert")}
              ></textarea>
            </div>
            <div className="columnsSelect">
              <label htmlFor="experience">Years of Experience</label>
              <CreatableSelect
                menuPlacement="top"
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
                    yoeSelected,
                    "solo"
                  );
                }}
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="languages">Languages</label>
              <CreatableSelect
                menuPlacement="top"
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
                    langSelected,
                    "multiple"
                  )
                }
              />
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
