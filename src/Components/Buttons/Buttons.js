function click() {}

const Buttons = ({ inputHandler, clearInputs, deleteChar, calculate }) => {
  return (
    <div>
      <button onClick={inputHandler}>1</button>
      <button onClick={inputHandler}>2</button>
      <button onClick={inputHandler}>3</button>
      <button onClick={inputHandler}>4</button>
      <button onClick={inputHandler}>5</button>
      <button onClick={inputHandler}>6</button>
      <button onClick={inputHandler}>7</button>
      <button onClick={inputHandler}>8</button>
      <button onClick={inputHandler}>9</button>
      <button onClick={inputHandler}>0</button>
      <button onClick={inputHandler}>+</button>
      <button onClick={inputHandler}>-</button>
      <button onClick={inputHandler}>/</button>
      <button onClick={inputHandler}>*</button>
      <button onClick={inputHandler}>=</button>
      <button onClick={clearInputs}>CE</button>
      <button onClick={deleteChar}>DEL</button>
    </div>
  );
};

export default Buttons;
