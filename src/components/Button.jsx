import React from "react";
import "./styles/Button.css";

const Button = ({ handleNewQuote }) => {
  return (
    <div className="container_button">
      <button className="button" onClick={handleNewQuote}>
        Probar Suerte
      </button>
    </div>
  );
};

export default Button;
