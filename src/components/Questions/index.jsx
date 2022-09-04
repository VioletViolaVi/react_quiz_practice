import React from "react";

function Questions({ increment, handleFunc, arrOfQuestions, arrLength }) {


  // const scoreKeeping = (isRightParam) => {
  //   // if (isRightParam === true) {
  //   //   let count = 0;
  //   //   console.log("isRightParam: ", isRightParam);
  //   //   console.log("count: ", count ++);
  //   //   // alert("CORRECT")
  //   // }

  //   return handleFunc;
  // };

  return (
    <>
      <h1>
        Question {increment + 1}/{arrLength}
      </h1>
      <p> {arrOfQuestions[increment].question}</p>

      {arrOfQuestions[increment].optionsArr.map((singleOptionObj) => {
        return (
          <button
            onClick={() => handleFunc=singleOptionObj.isRight} // needs fixing
            key={singleOptionObj.id}
          >
            {singleOptionObj.option}
          </button>
        );
      })}
    </>
  );
}

export default Questions;
