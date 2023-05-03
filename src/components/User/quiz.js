import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getQuestionByQuizId } from "../../services/apiService";
import _ from "lodash";
import "./quiz.scss";
import Question from "./question";

const Quiz = (props) => {
  const params = useParams();
  const location = useLocation();
  const quizId = params.id;

  const [dataQuiz, setDataQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const fetchQuestionByQuizId = async () => {
    let res = await getQuestionByQuizId(quizId);
    /* data nguyen thuy tra ve
    [
      {
        "id": 1,
        "description": "Đây là ai easy",
        "image": "/9j/4AAQSkZJRgABAQEASABIAAD/
        "answers": {
            "id": 1,
            "description": "Là cô nào đấy..."
        }
      },
      {
        "id": 1,
        "description": "Đây là ai easy",
        "image": "/9j/4AAQSkZJRgABAQEASABIAAD/
        "answers": {
            "id": 2,
            "description": "Là em nào đấy..."
        }
      },
      {
        "id": 1,
        "description": "Đây là ai easy",
        "image": "/9j/4AAQSkZJRgABAQEASABIAAD
        "answers": {
            "id": 3,
            "description": "Đếu care..."
        }
      },
      {
        "id": 2,
        "description": "Tôi là easy...",
        "image": null,
        "answers": {
            "id": 4,
            "description": "Là tôi"
        }
      },
      {
        "id": 2,
        "description": "Tôi là easy...",
        "image": null,
        "answers": {
            "id": 5,
            "description": "Là em nào đấy..."
        }
      },
      {
        "id": 2,
        "description": "Tôi là easy...",
        "image": null,
        "answers": {
            "id": 6,
            "description": "Đếu care..."
        }
      },
      {
        "id": 3,
        "description": "Đi đâu đấy easy...",
        "image": null,
        "answers": {
            "id": 7,
            "description": "Hà Nội"
        }
      },
      {
        "id": 3,
        "description": "Đi đâu đấy easy...",
        "image": null,
        "answers": {
            "id": 8,
            "description": "Đi chơi..."
        }
      },
      {
        "id": 3,
        "description": "Đi đâu đấy easy...",
        "image": null,
        "answers": {
            "id": 9,
            "description": "Sài Gòn"
        }
      }
    ]
    */

    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(raw)
        .groupBy("id")
        .map((value, key) => {
          let answers = [];
          let questionDescription = null;
          let image = null;
          value.forEach((item, index) => {
            if (index === 0) {
              questionDescription = item.description;
              image = item.image;
            }
            answers.push(item.answers);
          });

          return { questionId: key, questionDescription, image, answers };
        })
        .value();
      setDataQuiz(data);
      /* data sau khi duoc group by
      [
        {
          questionId: "1",
          answers: [
            {
              id: 1,
              description: "Là cô nào đấy...",
            },
            {
              id: 2,
              description: "Là em nào đấy...",
            },
            {
              id: 3,
              description: "Đếu care...",
            },
          ],
          questionDescription: "Đây là ai easy",
          image:
          "/9j/4AAQSkZJRgABAQEASABIAAD/
        },
        {
          questionId: "2",
          answers: [
            {
              id: 4,
              description: "Là tôi",
            },
            {
              id: 5,
              description: "Là em nào đấy...",
            },
            {
              id: 6,
              description: "Đếu care...",
            },
          ],
          questionDescription: "Tôi là easy...",
          image: null,
        },
        {
          questionId: "3",
          answers: [
            {
              id: 7,
              description: "Hà Nội",
            },
            {
              id: 8,
              description: "Đi chơi...",
            },
            {
              id: 9,
              description: "Sài Gòn",
            },
          ],
          questionDescription: "Đi đâu đấy easy...",
          image: null,
        },
      ];
      
      */
    }
  };

  useEffect(() => {
    fetchQuestionByQuizId();
  }, [quizId]);

  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <div className="title">
          Quiz {quizId}: {location?.state?.quizTitle}
        </div>
        <hr />
        <div className="question-body">
          <image />
        </div>
        <div className="question-content">
          <Question dataQuiz={dataQuiz[currentQuestion]} />
        </div>
        <div className="question-footer">
          <button
            className="btn btn-secondary"
            onClick={() =>
              setCurrentQuestion((prev) => (prev === 0 ? prev : prev - 1))
            }
          >
            Prev
          </button>
          <button
            className="btn btn-primary"
            onClick={() =>
              setCurrentQuestion((prev) =>
                prev === dataQuiz.length - 1 ? 0 : prev + 1
              )
            }
          >
            Next
          </button>
        </div>
      </div>
      <div className="right-content">count down</div>
      <div></div>
    </div>
  );
};

export default Quiz;
