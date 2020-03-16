import React from "react";

const SquareCard = ({ imgSrc, title }) => {
  return (
    <div className="SquareCard">
      {title && <h1>{title}</h1>}
      {imgSrc && <img src={`${imgSrc}`} alt="" />}
    </div>
  );
};

export default SquareCard;
