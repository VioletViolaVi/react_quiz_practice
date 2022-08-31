import React, { useState, useEffect } from "react";
import starterUsername from "./env";

const Form = () => {
  const [inputValue, setInputValue] = useState(starterUsername);
  const [repos, setRepos] = useState(`https://github.com/${inputValue}?tab=repositories`);

  // fetches data from github api
  useEffect(() => {
    fetch(
      `#`
    )
      .then((res) => res.json())
      .then((data) => {       
        setInputValue(data.inputValue);
      })
      .catch((err) => console.log(err));
  }, [repos]); // makes app re-run once

  const handleInput = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRepos(inputValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="#" method="get">
        <input onChange={handleInput} type="text" value={inputValue} placeholder="Enter repo name" required/>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
