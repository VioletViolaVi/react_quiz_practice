import React, { useEffect, useState } from "react";

import Questions from "../Questions";
import Scoreboard from "../Scoreboard";
import questionArr from "../Data";

function QuizGameHome() {
  /* incrementing number for changing questions & options */
  const [increment, setIncrement] = useState(0);

  /* toggles appearance of scoreboard @ end of game */
  const [showResults, setShowResults] = useState(false);

  /* updates player's score */
  const [playerScore, setPlayerScore] = useState(0);

  const handleMoveToNextQuestion = (isRightParam) => {
    console.log("isRightParam: ", isRightParam);


    /* keeps track of user's score */
    if (isRightParam === true) {
      console.log("This is true, CORRECT!!!");
      setPlayerScore((prev) => {
        prev += 1;
        return prev;
      });
    }

    /* increases incrementing number to change question & options */
    let newQuestion = increment + 1;

    if (newQuestion < questionArr.length) {
      setIncrement((prev) => {
        prev = newQuestion;
        return prev;
      });
    }

    /* shows opposite boolean to display/hide scores */
    if (newQuestion === questionArr.length) {
      setShowResults((prev) => {
        return !prev;
      });
    }
  };

  return (
    <>
      {showResults ? (
        <Scoreboard arrLength={questionArr.length} score={playerScore} />
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
