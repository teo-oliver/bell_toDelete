import React from "react";
import { withGlobalState } from "react-globally";

const RadioOption = ({
  title,
  imgSrc,
  option,
  handleChange,
  setGlobalState,
  globalState
}) => {
  // const handleChange = e => {
  //   const radioOpt = e.target.value;
  //   console.log(radioOpt);
  //   setGlobalState(prevGlobalState => ({
  //     radioBtn: radioOpt
  //   }));
  // };

  return (
    <div className="RadioOption">
      <input
        type="radio"
        name="radio"
        id={option}
        value={option}
        onChange={e => handleChange(e)}
      />
      <label htmlFor={option}>
        {imgSrc && <img src={`${imgSrc}`} alt="" />}
        {title && <h1>{title}</h1>}
      </label>
    </div>
  );
};

export default withGlobalState(RadioOption);
