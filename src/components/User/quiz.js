import { useParams } from "react-router-dom";
import { getQuestionByQuizId } from "../../services/apiService";
import { useEffect, useState } from "react";

const Quiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  const [quiz, setQuiz] = useState([]);

  const fetchQuestionByQuizId = async () => {
    let data = await getQuestionByQuizId(quizId);
    console.log("data", data);

    if (data && data.EC === 0) {
      setQuiz(data.DT);
    }
  };

  useEffect(() => {
    fetchQuestionByQuizId();
  }, [quizId]);

  return (
    <>
      <h1>Quiz</h1>
    </>
  );
};

export default Quiz;
