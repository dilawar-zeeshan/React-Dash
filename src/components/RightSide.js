import React from "react";
import ppImage from "./images/pp.png";
import CenterLeft from "./CenterLeft";
import CenterRight from "./CenterRight";
import FloatingBtns from "./FloatingBtns";

function RightSide() {
  return (
    <div className="rightside">
      <div className="header">
        <button className="icon-button-top">
          <img src={ppImage} alt="Icon" />
        </button>
      </div>
      <div className="top-bot">
        <CenterLeft />
        <CenterRight />
        <FloatingBtns></FloatingBtns>
      </div>
    </div>
  );
}

export default RightSide;
