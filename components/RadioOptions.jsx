import React from "react";
import RadioOption from "./RadioOption";

const RadioOptions = ({ radioOptsArray }) => {
  return (
    <div className="RadioOptions">
      {radioOptsArray.map(option => {
        return (
          <RadioOption
            title={option}
            imgSrc="/house-vector-style.svg"
            option={option}
          />
        );
      })}
    </div>
  );
};

export default RadioOptions;
