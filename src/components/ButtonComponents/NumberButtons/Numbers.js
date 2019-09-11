import React from "react";

//import any components needed

//Import your array data to from the provided data file
import { numbers } from "../../../data";

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const numButton = "numButton";
  const zeroButton = "zeroButton";

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
        numbers.map((nums, index) => {
          if(index !== 9){
            return <div className={numButton} key={index}>{nums}</div>
          } else {
            return <div className={zeroButton} key={index}>{nums}</div>
          }
        })
      }
    </div>
  );
};

export default Numbers;
