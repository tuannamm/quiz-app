import { useParams } from "react-router-dom";
import { getQuestionByQuizId } from "../../services/apiService";
import { useEffect, useState } from "react";
import _ from "lodash";

const Quiz = (props) => {
  const params = useParams();
  const quizId = params.id;

  const fetchQuestionByQuizId = async () => {
    let res = await getQuestionByQuizId(quizId);

    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(raw)
        .groupBy("id")
        .map((value, key) => {
          let answers = [];
          let questionDescription = null;
          let image = null;
          console.log("value ", value, "key ", key);
          value.forEach((item, index) => {
            if (index === 0) {
              questionDescription = item.description;
              image = item.image;
            }
            answers.push(item.answers);
          });

          return { questionId: key, answers, questionDescription, image };
        })
        .value();
      console.log(data);
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
