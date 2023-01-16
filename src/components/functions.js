import { React, useState } from "react";

const Functions = () => {
  const [display, setDisplay] = useState("");
  const [equal, setEqual] = useState("");
  const functions = ["%", "+", "÷", "×", "-", "."];

  const showScreen = (value) => {
    if (
      (functions.includes(value) && display === " ") ||
      (functions.includes(value) && functions.includes(display.slice(-1)))
    ) {
      return;
    }
    setDisplay(display + value);
    setEqual(equal);
  };

  return (
    <div className="main-container">
      <div className="display">{display}</div>
      <div className="eval" placeholder="0">
        {equal}
      </div>
      <hr />
      <div className="buttons">
        <button
          onClick={() => {
            setDisplay(" ");
          }}
          className="ac"
        >
          AC
        </button>
        <button
          onClick={() => {
            setDisplay(display.slice(0, -1));
          }}
          className="operators"
        >
          ←
        </button>
        <button
          onClick={() => {
            showScreen("/");
          }}
          className="operators"
        >
          ÷
        </button>
        <button
          onClick={() => {
            showScreen("7");
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            showScreen("8");
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            showScreen("9");
          }}
        >
          9
        </button>
        <button
          onClick={() => {
            showScreen("*");
          }}
          className="operators"
        >
          ×
        </button>
        <button
          onClick={() => {
            showScreen("4");
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            showScreen("5");
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            showScreen("6");
          }}
        >
          6
        </button>
        <button
          onClick={() => {
            showScreen("+");
          }}
          className="operators"
        >
          +
        </button>
        <button
          onClick={() => {
            showScreen("1");
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            showScreen("2");
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            showScreen("3");
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            showScreen("-");
          }}
          className="operators"
        >
          -
        </button>
        <button
          onClick={() => {
            showScreen("00");
          }}
        >
          00
        </button>
        <button
          onClick={() => {
            showScreen("0");
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            showScreen(".");
          }}
        >
          .
        </button>
        <button
          onClick={() => {
            setEqual(eval(display).toString());
          }}
          className="answer"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Functions;
