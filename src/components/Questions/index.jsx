import React from "react";

function Questions({ increment, handleFunc, arrOfQuestions, arrLength }) {
  return (
    <>
      <h1>
        Question {increment + 1}/{arrLength}
      </h1>
      <p> {arrOfQuestions[increment].question}</p>

      {arrOfQuestions[increment].optionsArr.map((singleOptionObj) => {
        return (
          <button onClick={handleFunc} key={singleOptionObj.id}>
            {singleOptionObj.option}
          </button>
        );
      })}
    </>
  );
}

export default Questions;
