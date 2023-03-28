import { useEffect, useState } from "react";
import "./quiz.scss";

import { getQuizListUser } from "../../services/apiService";

const QuizList = (props) => {
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

      {quizList && quizList.length === 0 && <h1>Don't have any quiz</h1>}
    </div>
  );
};

export default QuizList;
