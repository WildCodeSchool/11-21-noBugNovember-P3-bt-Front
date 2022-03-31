import "./styles/PageForm.css";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import CreatableSelect from "react-select/creatable";

const PageClient = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [options, setOptions] = useState([]);
  const [functionsOptions, setFunctionsOptions] = useState([]);
  // const [countryOptions, setCountryOptions] = useState([])
  const [favcOptions, setFavcOptions] = useState([]); // Favc = Favorite Contact
  const [kobOptions, setKobOptions] = useState([]); // Kob = Kind Of Business
  const [dsOptions, setDsOptions] = useState([]); // Ds = Desired Serviced
  const [companyNameOptions, setCompanyNameOptions] = useState([]);

  const [functionsSelected, setFunctionsSelected] = useState([]);
  const [favcSelected, setFavcSelected] = useState([]); // Favc = Favorite Contact
  const [kobSelected, setKobSelected] = useState([]); // Kob = Kind Of Business
  const [dsSelected, setDsSelected] = useState([]); // Ds = Desired Serviced
  const [companyNameSelected, setCompanyNameSelected] = useState([]);

  useEffect(() => {
    const getOptions = () => {
      axios
        .get("http://localhost:4040/clients/form")
        .then(
          (res) => console.log("res.data", res.data) || setOptions(res.data)
        )
        .catch(function (error) {
          console.log(error);
        });
    };
    getOptions();
  }, []);

  useEffect(() => {
    setFunctionsOptions(options.fonction);
    setFavcOptions(options.contactType);
    setKobOptions(options.companyType);
    setDsOptions(options.service);
    setCompanyNameOptions(options.companyName);
  }, [options]);

  const onSubmit = (data) => {
    let functionsDatas = [];
    let favoriteCDatas = [];
    let kindOfBDatas = [];
    let desiDatas = [];
    let companyDatas = [];

    functionsSelected.forEach((functions) => functionsDatas.push(functions.id));
    favcSelected.forEach((favc) => favoriteCDatas.push(favc.id));
    kobSelected.forEach((kob) => kindOfBDatas.push(kob.id));
    dsSelected.forEach((ds) => desiDatas.push(ds.id));
    companyNameSelected.forEach((company) => companyDatas.push(company.id));

    let fonction_id = { fonction_id: [...functionsDatas] };
    let contactType_id = { contactType_id: [...favoriteCDatas] };
    let companyType_id = { companyType_id: [...kindOfBDatas] };
    let service_id = { service_id: [...desiDatas] };
    let company_id = { company_id: [...companyDatas] };

    let datas = {
      ...data,
      ...fonction_id,
      ...contactType_id,
      ...companyType_id,
      ...service_id,
      ...company_id,
    };

    axios
      .post("http://localhost:4040/clients/", datas)
      .catch(navigate("/clients"));
  };

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
                <label for="numClients">N°</label>
                <input
                  id="numClients"
                  name="numClients"
                  type="key"
                  {...register("numClients")}
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
              ></input>
            </div>
            <div className="columnsDiv">
              <label for="lastName">LastName</label>
              <input
                autocomplete="off"
                id="lastName"
                name="lastName"
                type="text"
                {...register("lastname")}
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
                  handleCreate(
                    [e],
                    "company",
                    "companyName",
                    setCompanyNameSelected,
                    companyNameSelected,
                    "solo"
                  );
                }}
              />
            </div>
            <div className="columnsDiv">
              <label for="function">Function</label>
              <CreatableSelect
                closeMenuOnSelect={false}
                value={functionsSelected}
                options={functionsOptions}
                className="basic-multi-select"
                isMulti
                classNamePrefix="select"
                onChange={(e) => {
                  handleCreate(
                    e,
                    "fonction",
                    "fonctionName",
                    setFunctionsSelected,
                    functionsSelected,
                    "multiple"
                  );
                }}
              />
            </div>
            <div className="columnsSelect">
              <label for="contacts">Favorite Contact</label>
              <CreatableSelect
                closeMenuOnSelect={false}
                value={favcSelected}
                options={favcOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                isMulti
                onChange={(e) => {
                  handleCreate(
                    e,
                    "contacttype",
                    "contactTypeName",
                    setFavcSelected,
                    favcSelected,
                    "multiple"
                  );
                }}
              />
            </div>
            <div className="columnsSelect">
              <label for="kindOfBusiness">Kind Of Business</label>
              <CreatableSelect
                menuPlacement="top"
                value={kobSelected}
                options={kobOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => {
                  handleCreate(
                    [e],
                    "companytype",
                    "companyTypeName",
                    setKobSelected,
                    kobSelected,
                    "solo"
                  );
                }}
              />
            </div>
            <div className="columnsSelect">
              <label for="services">Desired Services</label>
              <CreatableSelect
                menuPlacement="top"
                closeMenuOnSelect={false}
                value={dsSelected}
                options={dsOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => {
                  handleCreate(
                    e,
                    "service",
                    "serviceName",
                    setDsSelected,
                    dsSelected,
                    "multiple"
                  );
                }}
              />
            </div>
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
export default PageClient;
