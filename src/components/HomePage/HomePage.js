import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import videoHomepage from "../../assets/homepage.mp4";

const HomePage = (props) => {
  const isAuthenticated = useSelector((state) => state?.user?.isAuthenticated);
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <video autoPlay loop muted>
        <source src={videoHomepage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title1">There's a better way to ask</div>
        <div className="title2">
          You don't want to make a boring form. And your audience won't answer
          one. Create a typeform instead—and make everyone happy.
        </div>
        <div className="title3">
          {isAuthenticated ? (
            <button onClick={() => navigate("/user")}>Start Quiz</button>
          ) : (
            <button onClick={() => navigate("/login")}>
              Get started - it's free
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
