import React, { useState } from "react";

const TextInput = ({ label }) => {
  const [fieldActivate, setFieldActivate] = useState(false);

  const activateField = () => {
    setFieldActivate(true);
  };

  const disableField = e => {
    if (e.target.value === "") {
      setFieldActivate(false);
    }
  };

  return (
    <div className="TextInput">
      <input
        type="text"
        onFocus={() => activateField()}
        onBlur={e => disableField(e)}
        // onChange={this.updateInputValue}
      />
      <label className={fieldActivate ? "field-active" : ""} htmlFor="text">
        {label}
      </label>
    </div>
  );
};

export default TextInput;
