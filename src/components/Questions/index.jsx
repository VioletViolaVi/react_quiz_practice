import React, { useState } from "react";

import questionArr from "../Data";

function Questions() {
  // number for changing questions & options
  const [increment, setIncrement] = useState(0);

  // increases number to change question & options
  const handleMoveToNextQuestion = () => {
    let newQuestion = increment + 1;

    if (newQuestion < questionArr.length) {
      setIncrement((prev) => {
        prev = newQuestion;
        return prev;
      });
    } else {
      alert("End of quiz");
    }
  };

  return (
    <>
      <h1>
        Question {increment + 1}/{questionArr.length}
      </h1>
      <p> {questionArr[increment].question}</p>

      {questionArr[increment].optionsArr.map((singleOptionObj) => {
        return (
          <button onClick={handleMoveToNextQuestion} key={singleOptionObj.id}>
            {singleOptionObj.option}
          </button>
        );
      })}
    </>
  );
}

export default Questions;
