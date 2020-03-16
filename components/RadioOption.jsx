import React from "react";

const RadioOption = ({ title, imgSrc, option }) => {
  const handleChange = e => {
    console.log(e.target.checked);
    alert("Changed");
  };

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

export default RadioOption;
