import React from "react";
import MdImage from "./images/Md.png";
import ppImage from "./images/pp.png";

function LeftSide() {
  return (
    <div className="leftside">
      <div className="button-wrapper">
        <button className="icon-button-top">
          <img src={MdImage} alt="Icon" /> {/* Use the imported image */}
        </button>
        <button className="icon-button-top">
        <img src={ppImage} alt="Icon" style={{marginTop: "15px", height: "30px", width: "30px"}}/>

        </button>
        <hr style={{ borderColor: 'green' }}></hr>
        <button className="icon-button-top">
          <i class="fa-solid fa-palette"></i>
        </button>
        <hr style={{ borderColor: 'green' }}></hr>
      </div>

      <div className="button-wrapper">
        <button className="icon-button-bot">
          <i class="fa-regular fa-folder-open"></i>
        </button>
        <button className="icon-button-bot">
          <i class="fa-regular fa-clipboard"></i>
        </button>
        <button className="icon-button-bot">
          <i class="fa-regular fa-note-sticky"></i>
        </button>
        <button className="icon-button-bot">
          <i class="fa-solid fa-briefcase"></i>
        </button>
        <button className="icon-button-bot">
          <i class="fa-solid fa-shapes"></i>
        </button>
      </div>

      <div className="empty-space"></div>
    </div>
  );
}

export default LeftSide;
