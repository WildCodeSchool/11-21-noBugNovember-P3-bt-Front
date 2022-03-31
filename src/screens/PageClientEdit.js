import "./styles/PageForm.css";

import CreatableSelect from "react-select/creatable";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const PageClientEdit = () => {
  const { id } = useParams();

  //*** Form Submit *****/
  const { register, handleSubmit } = useForm();
  // *** State Get Data ***
  const [options, setOptions] = useState([]);
  // *** Get Data Decomposé ***
  const [companyNameOptions, setCompanyNameOptions] = useState([]);
  const [companyTypeOptions, setCompanyTypeOptions] = useState([]);
  const [contactTypeOptions, setContactTypeOptions] = useState([]);
  const [serviceOptions, setServiceOptions] = useState([]);
  const [functionsOptions, setFunctionsOptions] = useState([]);

  const [numClientSelected, setNumClientSelected] = useState([]);
  const [firstNameSelected, setFirstNameSelected] = useState([]);
  const [lastNameSelected, setLastNameSelected] = useState([]);
  const [phoneSelected, setPhoneSelected] = useState([]);
  const [emailSelected, setEmailSelected] = useState([]);
  const [citySelected, setCitySelected] = useState([]);
  const [companyNameSelected, setCompanyNameSelected] = useState([]);
  const [contactTypeSelected, setContactTypeSelected] = useState([]);
  const [companyTypeSelected, setCompanyTypeSelected] = useState([]);
  const [serviceSelected, setServiceSelected] = useState([]);
  const [functionsSelected, setFunctionsSelected] = useState([]);
  const [feedbackClientSelected, setFeedbackClientSelected] = useState([]);

  const [dataClient, setDataClient] = useState([]);

  const [error, setError] = useState(false);

  // *** Navigation ***
  const navigate = useNavigate();

  // *** Get informations from data ***
  useEffect(() => {
    const getOptions = () => {
      axios
        .get(`http://localhost:4040/clients/form`)
        .then((res) => setOptions(res.data))
        .catch(function (error) {
          console.log(error);
        });
    };
    getOptions();
  }, []);

  //*****  Decompose les infos du GET de la BDD ****
  useEffect(() => {
    console.log("options", options);
    setFunctionsOptions(options.fonction);
    setCompanyNameOptions(options.companyName);
    setCompanyTypeOptions(options.companyType);
    setContactTypeOptions(options.contactType);
    setServiceOptions(options.service);
  }, [options]);

  //**************** Décomposition des données existantes d'un client *********/
  useEffect(() => {
    const dataClientFunc = () => {
      axios.get(`http://localhost:4040/clients/form/${id}`).then((res) => {
        console.log("form id", res.data);
        setDataClient(res.data);
        setNumClientSelected(res.data.numClient);
        setFirstNameSelected(res.data.firstname);
        setLastNameSelected(res.data.lastname);
        setPhoneSelected(res.data.phone);
        setEmailSelected(res.data.email);
        setCitySelected(res.data.city);
        setCompanyNameSelected(res.data.companyName);
        setContactTypeSelected(res.data.contactType);
        setCompanyTypeSelected(res.data.companyType);
        setServiceSelected(res.data.service);
        setFeedbackClientSelected(res.data.feedbackClient);
        setFunctionsSelected(res.data.fonction);
      });
    };
    dataClientFunc();
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
          .post("http://localhost:4040/clients/test", newValue)
          .then((res) => {
            setOption([...option, res.data]);
            return res.data;
          })
          .catch(function (error) {
            console.log(error);
          });
        if (multiple === "solo") {
          newDataPoulet = [temp];
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
    if (
      companyTypeSelected.length !== 0 &&
      contactTypeSelected.length !== 0 &&
      serviceSelected.length !== 0
    ) {
      setError(false);
      let ctcDatas = [];
      let servDatas = [];
      let compDatas = [];
      let cieDatas = [];
      let fctDatas = [];

      companyNameSelected.forEach((cie) => cie.id && cieDatas.push(cie.id));
      companyTypeSelected.forEach((comp) => comp.id && compDatas.push(comp.id));
      contactTypeSelected.forEach((ctc) => ctc.id && ctcDatas.push(ctc.id));
      serviceSelected.forEach((serv) => serv.id && servDatas.push(serv.id));
      functionsSelected.forEach((fct) => fct.id && fctDatas.push(fct.id));

      let companyType_id = { companyType_id: [...compDatas] };
      let contactType_id = { contactType_id: [...ctcDatas] };
      let service_id = { service_id: [...servDatas] };
      let company_id = { company_id: [...cieDatas] };
      let fonction_id = { fonction_id: [...fctDatas] };

      let datas = {
        numClients: data.numClient,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        city: data.city,
        phone: data.phone,
        ...company_id,
        ...companyType_id,
        ...contactType_id,
        ...service_id,
        ...fonction_id,
      };
      console.log("datas", datas);
      axios
        .put(`http://localhost:4040/clients/form/${id}`, datas)
        .then(function (res) {
          navigate("/clients");
        });
    } else {
      setError(true);
      console.log("Form error");
      data.preventDefault();
    }
  };

  return (
    <div className="tabContainerForm">
      {" "}
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
              <h1 id="client">CLIENT</h1>
              <div id="clientNumber">
                <label for="number">N°</label>
                <input
                  id="number"
                  name="number"
                  type="key"
                  {...register("numClient")}
                  value={numClientSelected}
                  onChange={(e) => setNumClientSelected(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="columnsDiv">
              <label for="firstName">FirstName</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                autocomplete="off"
                {...register("firstname")}
                value={firstNameSelected}
                onChange={(e) => setFirstNameSelected(e.target.value)}
              ></input>
            </div>
            <div className="columnsDiv">
              <label for="lastName">LastName</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autocomplete="off"
                {...register("lastname")}
                value={lastNameSelected}
                onChange={(e) => setLastNameSelected(e.target.value)}
              ></input>
            </div>

            <div className="columnsDiv">
              <label for="email">Email</label>
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
              <label for="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tell"
                role="presentation"
                autoComplete="off"
                {...register("phone")}
                value={phoneSelected}
                onChange={(e) => setPhoneSelected(e.target.value)}
              ></input>
            </div>
            <div className="columnsDiv">
              <label for="city">City</label>
              <input
                id="city"
                name="city"
                type="text"
                role="presentation"
                {...register("city")}
                value={citySelected}
                onChange={(e) => setCitySelected(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="columns">
            <div className="columnsDiv">
              <label for="company">Company</label>
              <CreatableSelect
                value={companyNameSelected}
                options={companyNameOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => {
                  setCompanyNameSelected([e]);
                  handleCreate(
                    [e],
                    "company",
                    "companyName",
                    setCompanyNameSelected,
                    companyNameSelected,
                    "solo",
                    companyNameOptions,
                    setCompanyNameOptions
                  );
                }}
              />
            </div>

            <div className="columnsSelect">
              <label for="functions">Functions</label>
              <CreatableSelect
                value={functionsSelected}
                closeMenuOnSelect={false}
                options={functionsOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => {
                  setFunctionsSelected(e);
                  handleCreate(
                    e,
                    "functions",
                    "functionsName",
                    setFunctionsSelected,
                    functionsOptions,
                    "multiple",
                    functionsOptions,
                    setFunctionsOptions
                  );
                }}
              />
            </div>
            <div className="columnsSelect">
              <label for="contacts">Favorite Contact</label>
              <CreatableSelect
                value={contactTypeSelected}
                closeMenuOnSelect={false}
                options={contactTypeOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => {
                  setContactTypeSelected(e);
                  handleCreate(
                    e,
                    "contacttype",
                    "contactTypeName",
                    setContactTypeSelected,
                    contactTypeOptions,
                    "multiple",
                    contactTypeOptions,
                    setContactTypeOptions
                  );
                }}
              />
            </div>
            <div className="columnsSelect">
              <label for="kindOfBusiness">Kind Of Business</label>
              <CreatableSelect
                menuPlacement="top"
                value={companyTypeSelected}
                options={companyTypeOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => {
                  setCompanyTypeSelected([e]);
                  handleCreate(
                    [e],
                    "companytype",
                    "companyTypeName",
                    setCompanyTypeSelected,
                    companyTypeSelected,
                    "solo",
                    companyTypeOptions,
                    setCompanyTypeOptions
                  );
                }}
              />
            </div>
            <div className="columnsSelect">
              <label for="services">Desired Services</label>
              <CreatableSelect
                menuPlacement="top"
                value={serviceSelected}
                closeMenuOnSelect={false}
                options={serviceOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => {
                  setServiceSelected(e);
                  handleCreate(
                    e,
                    "service",
                    "serviceName",
                    setServiceSelected,
                    serviceSelected,
                    "multiple",
                    serviceOptions,
                    setServiceOptions
                  );
                }}
              />
            </div>

            {/* <div className="columns"> */}
          </div>
          <div className="columns">
            <div className="columnsDiv">
              <label htmlFor="feedback">Comment</label>
              <textarea
                id="feedback"
                name="feedback"
                rows="20"
                cols="60"
                role="presentation"
                {...register("feedbackClient")}
                value={feedbackClientSelected}
                onChange={(e) => setFeedbackClientSelected(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="checkOrTrash">
            <button className="buttonAddForm"> Add </button>
            <FontAwesomeIcon icon={faTrashCan} size="lg" className="trashCan" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default PageClientEdit;
