import React, { useEffect, useState } from "react";

import Questions from "../Questions";
import Scoreboard from "../Scoreboard";
import questionArr from "../Data";

function QuizGameHome() {
  /* number for changing questions & options */
  const [increment, setIncrement] = useState(0);
  /* toggles appearance of scoreboard */
  const [showScore, setShowScore] = useState(false);

  /* increases number to change question & options */
  const handleMoveToNextQuestion = () => {
    let newQuestion = increment + 1;

    if (newQuestion < questionArr.length) {
      setIncrement((prev) => {
        prev = newQuestion;
        console.log("newQuestion: ", newQuestion, "questionArr.length: ", questionArr.length);
        return prev;
      });
    } 
    
    if (newQuestion === questionArr.length) {
      setShowScore((prev) => {
        return !prev;
      });
    }
  };

  return (
    <>
      {showScore ? (
        <Scoreboard />
      ) : (
        <Questions
          increment={increment}
          handleFunc={handleMoveToNextQuestion}
          arrOfQuestions={questionArr}
          arrLength={questionArr.length}
        />
      )}
    </>
  );
}

export default QuizGameHome;
