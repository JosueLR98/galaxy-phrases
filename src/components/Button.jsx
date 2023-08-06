import React from "react";

const Button = ({ handleNewQuote }) => {
  return (
    <div>
      <button onClick={handleNewQuote}>Probar Suerte </button>
    </div>
  );
};

export default Button;
