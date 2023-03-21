import { useState } from "react";

import "./login.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { postNewUser } from "../../services/apiService";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const goLogIn = () => {
    navigate("/login");
  };

  const signUpUser = async () => {
    const isValidEmail = validateEmail();
    if (isValidEmail) {
      toast.error("Invalid email");
    }
    if (!password) {
      toast.error("Invalid password");
    }

    let data = await postNewUser(email, password, userName);

    if (data && data.EC === 0) {
      toast.success(data.EM);
      goLogIn();
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <div className="signup-container">
      <div className="header">
        <span>Already have account?</span>
        <button className="sign-up-button" onClick={() => goLogIn()}>
          Log in
        </button>
      </div>
      <div className="title col-4 mx-auto">Quiz App</div>
      <div className="welcome col-4 mx-auto">Sign Up</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email (*)</label>
          <input
            type={"email"}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group pass-group">
          <label>Password (*)</label>
          <div>
            <input
              type={show === false ? "password" : "text"}
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            {show ? (
              <span className="icons-eye back" onClick={() => setShow(!show)}>
                <VscEye />
              </span>
            ) : (
              <span className="icons-eye back" onClick={() => setShow(!show)}>
                <VscEyeClosed />
              </span>
            )}
          </div>
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type={"text"}
            className="form-control"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
          <button className="btn-submit" onClick={() => signUpUser()}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
