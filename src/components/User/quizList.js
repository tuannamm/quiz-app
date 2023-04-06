import { useEffect, useState } from "react";
import "./quiz.scss";

import { getQuizListUser } from "../../services/apiService";
import { useNavigate } from "react-router-dom";

const QuizList = (props) => {
  const navigate = useNavigate();
  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    getQuizListOfUser();
  }, []);

  const getQuizListOfUser = async () => {
    let data = await getQuizListUser();

    if (data && data.EC === 0) {
      setQuizList(data.DT);
    }
  };

  return (
    <div className="quiz-list-container container">
      {quizList &&
        quizList.length > 0 &&
        quizList.map((quiz, index) => {
          return (
            <div
              key={`${index}-quiz`}
              className="card"
              style={{ width: "18rem" }}
            >
              <image
                className="card-img-top"
                src={`data:image/jpeg;base64, ${quiz.image}`}
                alt={`Quiz ${index}`}
              />
              <div className="card-body">
                <h5 className="card-title">Quiz {index + 1}</h5>
                <p className="card-text">{quiz.description}</p>
                <button className="btn btn-primary">Start now</button>
              </div>
            </div>
          );
        })}

      {quizList && quizList.length === 0 && (
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/quiz/1`)}
            >
              Start now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizList;
