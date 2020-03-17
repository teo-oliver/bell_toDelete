import React from "react";

const Tiles = ({ title, imgSrc }) => {
  return (
    <div className="Tiles">
      {title && <h1>{title}</h1>}
      {imgSrc && <img src={`${imgSrc}`} alt="" />}
    </div>
  );
};

export default Tiles;
