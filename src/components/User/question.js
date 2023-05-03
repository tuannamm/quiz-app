import _ from "lodash";

const Question = (props) => {
  const { dataQuiz, handleCheckbox } = props;

  if (_.isEmpty(dataQuiz)) {
    return <></>;
  }

  const handleCheckSelectAnswer = (e, answerId, questionId) => {
    handleCheckbox(answerId, questionId);
  };

  return (
    <>
      {dataQuiz.image ? (
        <div className="question-image">
          <img
            src={`data:image/jpeg;base64,${dataQuiz.image}`}
            alt={`${dataQuiz.questionDescription}`}
          />
        </div>
      ) : (
        <div className="question-image"></div>
      )}

      <div className="question">
        Question {dataQuiz?.questionId}: {dataQuiz?.questionDescription}
      </div>
      {dataQuiz?.answers &&
        dataQuiz?.answers.length &&
        dataQuiz?.answers.map((answer, index) => {
          return (
            <>
              <div className="answer" key={index}>
                <div class="answer-child">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={answer.isSelected}
                    onChange={(e) =>
                      handleCheckSelectAnswer(e, answer.id, dataQuiz.questionId)
                    }
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
