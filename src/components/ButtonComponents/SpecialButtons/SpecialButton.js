import React from "react";

const SpecialButton = ({ 
  specialOperation,
  symbols,
  display,
  setDisplay,
}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
        <div className="specialButton"
          onClick={() => specialOperation()}
          display={display}
          setdisplay={setDisplay}>
          {symbols}</div>
      }
    </>
  );
};

export default SpecialButton;