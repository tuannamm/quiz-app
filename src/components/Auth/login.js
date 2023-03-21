import { useState } from "react";

import "./login.scss";
import { postUser } from "../../services/apiService";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goBackHomepage = () => {
    navigate("/");
  };

  const goSignUp = () => {
    navigate("/signup");
  };

  const logInUser = async () => {
    let data = await postUser(email, password);

    if (data && data.EC === 0) {
      toast.success(data.EM);
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have account yet?</span>
        <button className="sign-up-button" onClick={() => goSignUp()}>
          Sign up
        </button>
      </div>
      <div className="title col-4 mx-auto">Quiz App</div>
      <div className="welcome col-4 mx-auto">Hello, who's this?</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email</label>
          <input
            type={"email"}
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type={"password"}
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span className="forgot-password">Forgot password?</span>
        <div>
          <button className="btn-submit" onClick={() => logInUser()}>
            Login to Quiz App
          </button>
        </div>
        <div className="text-center">
          <span className="back" onClick={() => goBackHomepage()}>
            &#60; Go to Homepage
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
