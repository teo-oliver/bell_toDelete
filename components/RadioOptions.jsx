import React from "react";
import RadioOption from "./RadioOption";
import { withGlobalState } from "react-globally";

const RadioOptions = ({ radioOptsArray, globalState, setGlobalState }) => {
  const handleChange = e => {
    const radioOpt = e.target.value;
    console.log(radioOpt);
    setGlobalState(prevGlobalState => ({
      radioBtn: radioOpt
    }));
  };

  return (
    <div className="RadioOptions grid-tablet-2 grid-desktop-2">
      {globalState.radioBtn}
      {radioOptsArray.map(option => {
        return (
          <RadioOption
            title={option}
            imgSrc="/house-vector-style.svg"
            option={option}
            handleChange={handleChange}
          />
        );
      })}
    </div>
  );
};

export default withGlobalState(RadioOptions);
