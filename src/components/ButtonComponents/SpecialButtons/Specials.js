import React from "react";

//import any components needed

//Import your array data to from the provided data file
import { specials } from "../../../data";
import SpecialButton from './SpecialButton';

const Specials = ({symbol, display, setDisplay}) => {
  // STEP 2 - add the imported data to state


  function specialOperation() {
    if(symbol === "C"){
      return setDisplay("");
    } else if(symbol === "+/-"){
      return setDisplay(display * -1);
    } else if(symbol === "%"){
      return setDisplay(display / 100);
    }
  }


  return (
    <div className="specialCon">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       specials.map((symbols, index) => <SpecialButton 
         specialButton="specialButton"
         specialOperation={specialOperation}
         display={display}
         setDisplay={setDisplay}
         symbols={symbols}
         key={index}
       />
       )

       }
    </div>
  );
};

export default Specials;
// export const specials = ["C", "+/-", "%"];