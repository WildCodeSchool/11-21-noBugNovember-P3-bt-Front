import BTHTLogo from "../assets/BTHT-Blue_edited.webp";

import "./styles/Login.css";

const Login = () => {
  return (
    <div className="loginPage">
      <div className="loginBackground"></div>
      <div className="loginContainer">
        <img src={BTHTLogo} alt="logo_BTHT" id="loginLogo" />
        <div className="loginWrapper">
          <div className="loginInput">
            <label htmlFor="userName" className="loginLabel">
              Username
            </label>
            <input type="text" id="userName" placeholder="username" />
          </div>
          <div className="loginInput">
            <label htmlFor="password" className="loginLabel">
              Password
            </label>
            <input type="text" id="password" placeholder="password" />
          </div>
          <div className="loginBtnWrapper">
            <button id="loginBtn">ENTER</button>
          </div>
        </div>
      </div>
      <div className="loginBackground backgroundRight"></div>
    </div>
  );
};

export default Login;
