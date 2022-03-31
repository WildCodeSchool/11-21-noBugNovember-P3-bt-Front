import axios from "axios";
import CreatableSelect from "react-select/creatable";
import { faCircleXmark, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/PageForm.css";

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
  const [hcpOptions, setHcpOptions] = useState([]);
  const [sectorOptions, setSectorOptions] = useState([]);
  const [induOptions, setInduOptions] = useState([]);
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
  const [numExpertSelected, setNumExpertSelected] = useState([]);
  const [firstNameSelected, setFirstNameSelected] = useState([]);
  const [lastNameSelected, setLastNameSelected] = useState([]);
  const [phoneSelected, setPhoneSelected] = useState([]);
  const [emailSelected, setEmailSelected] = useState([]);
  const [linkedinSelected, setLinkedinSelected] = useState([]);
  const [keywordsSelected, setKeyWordsSelected] = useState([]);
  const [feedbackSelected, setFeedbackSelected] = useState([]);
  const [priceSelected, setPriceSelected] = useState([]);
  const [costSelected, setCostSelected] = useState([]);
  const [hcpSelected, setHcpSelected] = useState([]);
  const [sctSelected, setSctSelected] = useState([]);
  const [induSelected, setInduSelected] = useState([]);
  const [fctSelected, setFctSelected] = useState([]);
  const [specSelected, setSpecSelected] = useState([]);

  const [error, setError] = useState(false);
  const [newOptions, setNewOptions] = useState([]);

  //   State des Data de l'expert
  const [dataExpert, setDataExpert] = useState([]);

  //  ********************   DONNE BDD EXPERT ***************************

  useEffect(() => {
    const getOptions = () => {
      axios
        .get(`http://localhost:4040/experts/form`)
        .then((res) => setOptions(res.data))
        .catch(function (error) {
          console.log(error);
        });
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
    setHcpOptions(options.hcptype);
    setSectorOptions(options.sector);
    setFonctionOptions(options.fonction);
    setInduOptions(options.industry);
    setHcpOptions(options.hcptype);
    setSectorOptions(options.sector);
    setSpecialtyOptions(options.specialty);
  }, [options]);

  // ********************   DATA EXPERT ***************************

  useEffect(() => {
    const dataExpertFunc = () => {
      axios.get(`http://localhost:4040/experts/form/${id}`).then((res) => {
        setDataExpert(res.data);
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
        setCostSelected(res.data.cost);
        setFeedbackSelected(res.data.feedbackExpert);
        setKeyWordsSelected(res.data.keywords);
        setPriceSelected(res.data.price);
        setHcpSelected(res.data.hcpTypeName);
        setSctSelected(res.data.sectorName);
        setFctSelected(res.data.fonction);
        setInduSelected(res.data.industry);
        setSpecSelected(res.data.specialty);
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
    option,
    setOption
  ) => {
    let newDataPoulet = [];
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
            setOption([...option, res.data]);
            return res.data;
          })
          .catch(function (error) {
            console.log(error);
          });
        if (multiple === "solo") {
          newDataPoulet = temp;
        } else {
          newDataPoulet = [...newDataPoulet, temp];
        }
        temp = [];
        // If the Value Is in DATABASE
      } else {
        if (multiple === "solo") {
          const goodOpt = option.filter(
            (el) => el.value === inputValue[i].value
          );
          newDataPoulet = goodOpt;
        } else {
          const goodOpt2 = option.filter(
            (el) => el.value === inputValue[i].value
          );
          newDataPoulet.push(...goodOpt2);
        }
      }
    }

    set(newDataPoulet);
  };

  /* ******************* END FUNCTION WHEN WE SUBMIT THE FORMULARE **************   */
  const onSubmit = async (data) => {
    console.log(cieSelected);
    if (
      yoeSelected.length !== 0 &&
      cieSelected.length !== 0 &&
      jobSelected.length !== 0 &&
      practiceSelected &&
      koeSelected.length !== 0
    ) {
      setError(false);
      // champs select donnée unique
      const company_id = cieSelected[0].id;
      const jobTitle_id = jobSelected[0].id;
      const kindOfExpert_id = koeSelected[0].id;
      const practice_id = practiceSelected.id;
      const expertiseLevel_id = yoeSelected[0].id;

      // champs select données multiples
      let geoDatas = [];
      let langDatas = [];
      let pcieDatas = [];
      let ctcDatas = [];
      let pjtDatas = [];
      let indDatas = [];
      let fctDatas = [];
      let hcpDatas = [];
      let sctDatas = [];
      let specDatas = [];

      geoSelected.forEach((geo) => geo.id && geoDatas.push(geo.id));
      langSelected.forEach((lang) => lang.id && langDatas.push(lang.id));
      pcieSelected.forEach((pcie) => pcie.id && pcieDatas.push(pcie.id));
      ctcSelected.forEach((ctc) => ctc.id && ctcDatas.push(ctc.id));
      pjtSelected.forEach((pjt) => pjt.id && pjtDatas.push(pjt.id));
      induSelected.forEach((indu) => indu.id && indDatas.push(indu.id));
      fctSelected.forEach((fct) => fct.id && fctDatas.push(fct.id));
      hcpSelected.forEach((hcp) => hcp.id && hcpDatas.push(hcp.id));
      sctSelected.forEach((sct) => sct.id && sctDatas.push(sct.id));
      specSelected.forEach((spec) => spec.id && specDatas.push(spec.id));

      let geoExpertise_id = { geoExpertise_id: [...geoDatas] };
      let languages_id = { languages_id: [...langDatas] };
      let pastCompany_id = { pastCompany_id: [...pcieDatas] };
      let contactType_id = { contactType_id: [...ctcDatas] };
      let projects_id = { projects_id: [...pjtDatas] };
      let industry_id = { industry_id: [...indDatas] };
      let fonction_id = { fonction_id: [...fctDatas] };
      let hcpType_id = { hcpType_id: [...hcpDatas] };
      let sector_id = { sector_id: [...sctDatas] };
      let specialty_id = { specialty_id: [...specDatas] };

      let datas = {
        // champs libres donnée unique
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        linkedinProfile: data.linkedinProfile,
        price: data.price,
        numExpert: data.numExpert,
        keywords: data.keywords,
        feedbackExpert: data.feedbackExpert,
        cost: data.cost,

        // champs select donnée unique
        company_id: company_id,
        jobtitle_id: jobTitle_id,
        kindOfExpert_id: kindOfExpert_id,
        practice_id: practice_id,
        expertiseLevel_id: expertiseLevel_id,

        // champs select données multiples
        ...geoExpertise_id,
        ...languages_id,
        ...pastCompany_id,
        ...contactType_id,
        ...projects_id,
        ...industry_id,
        ...fonction_id,
        ...hcpType_id,
        ...sector_id,
        ...specialty_id,
      };
      console.log("datas", datas);
      axios
        .put(`http://localhost:4040/experts/form/${id}`, datas)
        .then(function (res) {
          navigate("/experts");
        });
    } else {
      setError(true);
      console.log("Form error", yoeSelected);
      data.preventDefault();
    }
  };

  // ******************** DELETE EXPERTS *******************

  const onDelete = () => {
    axios
      .delete(`http://localhost:4040/experts/form/${id}`)
      .then(function (res) {
        navigate("/experts");
      });
  };

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
            <div className="columnsDiv">
              <label htmlFor="keywords">Keywords</label>
              <input
                id="keywords"
                name="keywords"
                type="text"
                role="presentation"
                {...register("keywords")}
                value={keywordsSelected}
                onChange={(e) => setKeyWordsSelected(e.target.value)}
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
                value={fctSelected}
                onChange={(e) => {
                  handleCreate(
                    e,
                    "fonction",
                    "fonctionName",
                    setFctSelected,
                    fctSelected,
                    "multiple",
                    fonctionOptions,
                    setFonctionOptions
                  );
                }}
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="contactOptions">Contact Preferences</label>
              <CreatableSelect
                menuPlacement="top"
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
                    ctcSelected,
                    "multiple",
                    contactsOptions,
                    setContactsOptions
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
                onChange={(e) => {
                  setKoeSelected([e]);
                  handleCreate(
                    [e],
                    "kindofexpert",
                    "kindOfExpertName",
                    setKoeSelected,
                    koeSelected,
                    "solo",
                    kindOfExpertOptions,
                    setKindOfExpertOptions
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
                    geoSelected,
                    "multiple",
                    geoExpertiseOptions,
                    setGeoExpertiseOptions
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
                value={induSelected}
                onChange={(e) =>
                  handleCreate(
                    e,
                    "industry",
                    "industryName",
                    setInduSelected,
                    induSelected,
                    "multiple",
                    induOptions,
                    setInduOptions
                  )
                }
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
                value={practiceSelected}
                onChange={(e) => setPracticeSelected(e)}
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="jobTitle">Job Title</label>
              <CreatableSelect
                menuPlacement="top"
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
                    "solo",
                    jobTitleOptions,
                    setJobTitleOptions
                  );
                }}
              />
            </div>

            <div className="columnsSelect">
              <label htmlFor="companyOptions">Company</label>
              <CreatableSelect
                menuPlacement="top"
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
                    "solo",
                    companyOptions,
                    setCompanyOptions
                  );
                }}
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="pastCompaniesOptions">Past Companies</label>
              <CreatableSelect
                menuPlacement="top"
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
                    pastCompaniesOptions,
                    setPastCompaniesOptions
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
                value={priceSelected}
                onChange={(e) => setPriceSelected(e.target.value)}
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
                value={costSelected}
                onChange={(e) => setCostSelected(e.target.value)}
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
                value={hcpSelected}
                onChange={(e) =>
                  handleCreate(
                    e,
                    "hcptype",
                    "hcpTypeName",
                    setHcpSelected,
                    hcpSelected,
                    "multiple",
                    hcpOptions,
                    setHcpOptions
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
                value={sctSelected}
                onChange={(e) =>
                  handleCreate(
                    e,
                    "sector",
                    "sectorName",
                    setSctSelected,
                    sctSelected,
                    "multiple",
                    sectorOptions,
                    setSectorOptions
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
                value={specSelected}
                onChange={(e) =>
                  handleCreate(
                    e,
                    "specialty",
                    "specialtyName",
                    setSpecSelected,
                    specSelected,
                    "multiple",
                    specialtyOptions,
                    setSpecialtyOptions
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
                value={feedbackSelected}
                onChange={(e) => setFeedbackSelected(e.target.value)}
              ></textarea>
            </div>
            <div className="columnsSelect">
              <label htmlFor="experience">Years of Experience</label>
              <CreatableSelect
                menuPlacement="top"
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
                    "solo",
                    yearsOfExperienceOptions,
                    setYearsOfExperienceOptions
                  );
                }}
              />
            </div>
            <div className="columnsSelect">
              <label htmlFor="languages">Languages</label>
              <CreatableSelect
                menuPlacement="top"
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
                    langSelected,
                    "multiple",
                    languagesOptions,
                    setLanguagesOptions
                  );
                }}
              />
            </div>
          </div>
          <div className="checkOrTrash">
            <button className="buttonAddForm" onClick={() => onSubmit()}>
              Add
            </button>
            <FontAwesomeIcon
              onClick={() => onDelete()}
              icon={faTrashCan}
              size="lg"
              className="trashCan"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageExpertEdit;
