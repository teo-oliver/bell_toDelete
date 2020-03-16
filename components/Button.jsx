import React, { Children } from "react";

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  className
}) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
