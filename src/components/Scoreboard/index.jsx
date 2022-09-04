import React from "react";

function Scoreboard({ arrLength, score }) {
  return (
    <>
      <h1>Scoreboard</h1>
      <p>
        You scored {score}/{arrLength}
      </p>
    </>
  );
}

export default Scoreboard;
