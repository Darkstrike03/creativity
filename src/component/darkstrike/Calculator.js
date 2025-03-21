import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import Popup from "./Popup";
import "./calculator.css";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [showPopup, setShowPopup] = useState(false);

  const appendToDisplay = (value) => {
    setDisplayValue((prev) =>
      prev === "0" && value !== "." ? value : prev + value
    );
  };

  const clearDisplay = () => setDisplayValue("0");

  const deleteLast = () =>
    setDisplayValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));

  const calculateResult = () => {
    try {
      setDisplayValue(eval(displayValue).toString()); // Use a safer eval alternative in production
    } catch {
      setDisplayValue("Error");
    }
  };

  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="buttons">
        <Button label="C" onClick={clearDisplay} />
        <Button label="DEL" onClick={deleteLast} />
        <Button label="%" onClick={() => appendToDisplay("%")} />
        <Button label="÷" onClick={() => appendToDisplay("/")} />

        <Button label="7" onClick={() => appendToDisplay("7")} />
        <Button label="8" onClick={() => appendToDisplay("8")} />
        <Button label="9" onClick={() => appendToDisplay("9")} />
        <Button label="×" onClick={() => appendToDisplay("*")} />

        <Button label="4" onClick={() => appendToDisplay("4")} />
        <Button label="5" onClick={() => appendToDisplay("5")} />
        <Button label="6" onClick={() => appendToDisplay("6")} />
        <Button label="−" onClick={() => appendToDisplay("-")} />

        <Button label="1" onClick={() => appendToDisplay("1")} />
        <Button label="2" onClick={() => appendToDisplay("2")} />
        <Button label="3" onClick={() => appendToDisplay("3")} />
        <Button label="+" onClick={() => appendToDisplay("+")} />

        <Button label="0" onClick={() => appendToDisplay("0")} />
        <Button label="." onClick={() => appendToDisplay(".")} />
        <Button label="=" onClick={calculateResult} />
        <Button label="More" onClick={togglePopup} />
      </div>
      {showPopup && <Popup onClose={togglePopup} />}
    </div>
  );
};

export default Calculator;