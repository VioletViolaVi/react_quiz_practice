import React from "react";
import Questions from "../Questions";
import Scoreboard from "../Scoreboard";

function QuizGame() {
  return (
    <>
      {true ? <Questions /> : <Scoreboard />}
    </>
  );
}

export default QuizGame;
