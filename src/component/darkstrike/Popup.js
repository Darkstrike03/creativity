import React from "react";

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <h3>More Options</h3>
      <button onClick={() => alert("Scientific Calculator coming soon!")}>
        Scientific Calculator
      </button>
      <button onClick={() => alert("Currency Converter coming soon!")}>
        Currency Converter
      </button>
      <button onClick={() => alert("Unit Converter coming soon!")}>
        Unit Converter
      </button>
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Popup;