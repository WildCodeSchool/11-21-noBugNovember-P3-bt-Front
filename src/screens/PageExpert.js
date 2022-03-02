import "./styles/PageExpert.css";

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

  useEffect(() => {
    const getOptions = () => {
      axios
        .get("http://localhost:4040/experts/form")
        .then((res) => console.log(res.data) || setOptions(res.data));
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
  }, [options]);

  const onSubmit = (data) => console.log(data);
  // console.log(errors);

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
                <label for="number">N°</label>
                <input
                  id="number"
                  name="number"
                  type="key"
                  {...register("numExpert")}
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
                {...register("lastName")}
              ></input>
            </div>
            <div className="columnsDiv">
              <label for="phone">Phone</label>
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
              <label for="linkedin">Linkedin Profile</label>
              <input
                id="linkedin"
                name="linkedin"
                type="url"
                role="presentation"
                {...register("linkedinProfile")}
              ></input>
            </div>
            <div className="columnsDiv">
              <label for="contact">Contact Preferences</label>
              <input
                id="contact"
                name="contact"
                type="text"
                role="presentation"
                {...register("contactType")}
              ></input>
            </div>
          </div>
          <div className="columns">
            <div className="columnsSelect">
              <label for="projects">Projects</label>
              <input
                id="projects"
                name="projects"
                type="text"
                role="presentation"
                {...register("projects")}
              ></input>
            </div>

            <div className="columnsSelect">
              <label for="kindOfExpertOptions">Type</label>
              <Select
                closeMenuOnSelect={false}
                options={kindOfExpertOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>

            <div className="columnsSelect">
              <label for="geoExpertise">Geo Expertise</label>
              <Select
                closeMenuOnSelect={false}
                options={geoExpertiseOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
            <div className="columnsSelect">
              <label for="practice">Practice</label>
              <Select
                closeMenuOnSelect={false}
                options={practiceOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
            <div className="columnsSelect">
              <label for="jobTitle">Job Title</label>
              <Select
                closeMenuOnSelect={false}
                options={jobTitleOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>

            <div className="columnsDiv">
              <label for="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                role="presentation"
                {...register("company")}
              ></input>
            </div>
            <div className="columnsDiv">
              <label for="pastcompanies">Past Companies</label>
              <input
                id="pastcompanies"
                name="pastcompanies"
                type="text"
                role="presentation"
                {...register("pastCompanies")}
              ></input>
            </div>
          </div>
          <div className="columns">
            <div className="columnsDiv">
              <label for="price/hr">Price/hr</label>
              <input
                id="price/hr"
                name="price/hr"
                type="number"
                role="presentation"
                {...register("price")}
              ></input>
            </div>
            <div className="columnsDiv">
              <label for="cost">Cost/hr</label>
              <input
                id="cost"
                name="cost"
                type="number"
                role="presentation"
                {...register("cost")}
              ></input>
            </div>
            <div className="columnsDiv">
              <label for="feedback">Feedback</label>
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
              <label for="experience">Years of Experience</label>
              <Select
                closeMenuOnSelect={false}
                options={yearsOfExperienceOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
            <div className="columnsSelect">
              <label for="languages">Languages</label>
              <Select
                closeMenuOnSelect={false}
                options={languagesOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
            <div className="columnsDiv">
              <label for="keywords">Keywords</label>
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
