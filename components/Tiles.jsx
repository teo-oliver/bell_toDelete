import React from "react";

const Tiles = ({ imgSrc }) => {
  return (
    <div>
      <div class="aspect-ratio-box-container">
        <div class="aspect-ratio-box">
          <div class="aspect-ratio-box__content center">
            <h1 className="content__title">Home</h1>
            {imgSrc && (
              <img className="content__img" src={`${imgSrc}`} alt="" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
