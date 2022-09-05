import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  // handle input
  const inputHandler = (e) => {};
  // clear inputs
  const clearInputs = () => {
    setInput("");
    setAnswer("");
  };
  // calculate

  // delete characters
  const deleteChar = () => {
    if (answer !== "") {
      setInput(answer.toString().slice(0, -1));
      setAnswer("");
    } else {
      setInput((prev) => prev.slice(0, -1));
    }
  };

  return <div></div>;
};
