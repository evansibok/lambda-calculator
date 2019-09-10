import React from "react";

//import any components needed

//Import your array data to from the provided data file
import { operators } from "../../../data";

const Operators = ({symbol, value}) => {
  // STEP 2 - add the imported data to state

  const operatorButton = "opButton";

  // function symbolKeys(){
  //   if (symbol === "/" || symbol === "x" || symbol === "-" || symbol === "+" || symbol === "=") {
  //     return () => symbol
  //   }
  // }

  // function valueKeys() {
  //   if (value === "/" || "*" || "-" || "+" || "=") {
  //     return () => value
  //   }
  // }

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
        operators.map((chars, index) => 
        <div key={index} 
        symbol={chars.char} 
        value={chars.value} 
        className={operatorButton}>
        {chars.char}</div>
        )
        }
    </div>
  );
};

export default Operators;