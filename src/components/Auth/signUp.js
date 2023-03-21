import "./login.scss";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const goBackLogIn = () => {
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="header">
        <span>Welcome to Quiz App</span>
      </div>
      <div className="title col-4 mx-auto">Quiz App</div>
      <div className="welcome col-4 mx-auto">Sign Up</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email</label>
          <input type={"email"} className="form-control" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type={"password"} className="form-control" />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type={"text"} className="form-control" />
        </div>

        <div>
          <button className="btn-submit">Sign Up</button>
        </div>
        <span onClick={() => goBackLogIn()}>Already have account?</span>
      </div>
    </div>
  );
};

export default SignUp;
