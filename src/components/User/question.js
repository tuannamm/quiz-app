import _ from "lodash";

const Question = (props) => {
  const { dataQuiz } = props;

  if (_.isEmpty(dataQuiz)) {
    return <></>;
  }

  return (
    <>
      <div className="question-image">
        <img src={`data:image/jpeg;base64,${dataQuiz.image}`} />
      </div>
      <div className="question">
        Question {dataQuiz?.questionId}: {dataQuiz?.questionDescription}
      </div>
      {dataQuiz?.answers &&
        dataQuiz?.answers.length &&
        dataQuiz?.answers.map((answer, index) => {
          return (
            <>
              <div className="answer" key={index}>
                <div class="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  {answer?.description}
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Question;
