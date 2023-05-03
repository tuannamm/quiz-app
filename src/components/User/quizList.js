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
              <div>
                <img
                  className="card-img-top"
                  src={`data:image/jpeg;base64, ${quiz.image}`}
                  alt={`Quiz ${index}`}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Quiz {index + 1}</h5>
                <p className="card-text">{quiz.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    navigate(`/quiz/${index + 1}`, {
                      state: { quizTitle: quiz.description },
                    })
                  }
                >
                  Start now
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default QuizList;
