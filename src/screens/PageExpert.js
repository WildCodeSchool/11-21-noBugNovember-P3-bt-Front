import "./styles/PageExpert.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const PageExpert = () => {
  return (
    <div className="tabContainer ">
      {" "}
      <div className="pageExpert">
        <FontAwesomeIcon icon={faCircleXmark} className="circle" />
        <form className="pageExpertForm">
          <div id="idWrapper">
            <h1 id="expert">EXPERT</h1>
            <div>
              <label for="number">N°</label>
              <input id="number" name="number" type="key"></input>
            </div>
          </div>
          <div>
            <label for="lastName">LastName</label>
            <input id="lastName" name="lastName" type="text"></input>
          </div>
          <div>
            <label for="firstName">FirstName</label>
            <input id="firstName" name="firstName" type="text"></input>
          </div>

          <div>
            <label for="phone">Phone</label>
            <input name="phone" type="tel"></input>
          </div>
          <div>
            <label for="type">Type</label>
            <input id="type" name="type" type="text"></input>
          </div>
          <div>
            <label for="price/hr">Price/hr</label>
            <input id="price/hr" name="price/hr" type="number"></input>
          </div>
          <div>
            <label for="email">Email</label>
            <input id="email" name="email" type="email"></input>
          </div>
          <div>
            <label for="practice">Practice</label>
            <input id="practice" name="practice" type="text"></input>
          </div>
          <div>
            <label for="cost">Cost/hr</label>
            <input id="cost" name="cost" type="number"></input>
          </div>
          <div>
            <label for="linkedin">Linkedin Profile</label>
            <input id="linkedin" name="linkedin" type="url"></input>
          </div>
          <div>
            <label for="jobTitle">Job Title</label>
            <input id="cost" name="cost" type="text"></input>
          </div>
          <div>
            <label for="feedback">Feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              rows="10"
              cols="60"
            ></textarea>
          </div>
          <div>
            <label for="contact">Contact Preferences</label>
            <input id="contact" name="contact" type="text"></input>
          </div>
          <div>
            <label for="experience">Years of Experience</label>
            <input id="experience" name="experience" type="text"></input>
          </div>
          <div>
            <label for="languages">Languages</label>
            <input id="languages" name="languages" type="text"></input>
          </div>
          <div>
            <label for="company">Company</label>
            <input id="company" name="company" type="text"></input>
          </div>
          <div>
            <label for="geoExpertise">Geo Expertise</label>
            <input id="geoExpertise" name="geoExpertise" type="text"></input>
          </div>
          <div>
            <label for="pastcompanies">Past Companies</label>
            <input id="pastcompanies" name="pastcompanies" type="text"></input>
          </div>
          <div>
            <label for="projects">Projects</label>
            <input id="projects" name="projects" type="text"></input>
          </div>
          <div>
            <label for="keywords">Keywords</label>
            <input id="keywords" name="keywords" type="text"></input>
          </div>

          <button> Valider </button>
          <FontAwesomeIcon icon={faTrashCan} />
        </form>
      </div>
    </div>
  );
};

export default PageExpert;
