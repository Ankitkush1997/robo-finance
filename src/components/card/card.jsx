import React from "react";

import "./card.scss";

const Card = ({
  leftTopImage,
  number,
  bottomText,
  arrow,
  arrowText,
  questionMark,
}) => {
  return (
    <div className="card-container">
      <div className="left-section">
        <img src={leftTopImage} alt="" />
        <div className="left-bottom">
          <span>{number}</span>
          <p>{bottomText}</p>
        </div>
      </div>
      <div className="right-section">
        <div className="market-status">
          {arrow && <img src={arrow} alt="down-arrow" />}
          {arrowText && <span>{arrowText}</span>}
        </div>
        <img src={questionMark} alt="" />
      </div>
    </div>
  );
};

export default Card;
