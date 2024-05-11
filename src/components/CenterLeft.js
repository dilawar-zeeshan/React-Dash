// CenterLeft.js
import React from "react";
import ppImage from "./images/pp.png";


function CenterLeft({ userData }) {
  return (
    <div className="centerleft">
      <div className="cl-pp">
        <img src={ppImage} alt="Icon" />
      </div>
      <div className="name">
        <input
          style={{ fontSize: "32px" , fontWeight:'545'}}
          type="text"
          name="name"
          value={userData.name}
          className="name-input"
          readOnly
        />
      </div>
      <div className="email">
        <input
        style={{color:'rgb(108, 107, 106)'}}
          type="text"
          name="email"
          value={userData.email}
          className="email-input"
          readOnly
        />
      </div>
      <div className="left-bot">
        <hr className="hr" />
        <div className="about"> ABOUT ME <i class="fa-solid fa-circle-info" ></i> </div>
        <input
        style={{color:'rgb(108, 107, 106)'}}
          type="text"
          name="about"
          value={userData.about}
          className="about-input"
          readOnly
        />
        <hr className="hr" />
        <div className="location"> LOCATION <i class="fa-solid fa-circle-info"></i> </div>
        <input style={{color:'rgb(108, 107, 106)'}}
          type="text"
          name="location"
          value={userData.location}
          className="location-input"
          readOnly
        />
        <hr className="hr" />
        <div className="skills"> SKILLS <i class="fa-solid fa-circle-info"></i></div>
        <input 
        style={{color:'rgb(108, 107, 106)'}}
          type="text"
          name="skills"
          value={userData.skills}
          className="skills-input"
          readOnly
        />
        <hr className="hr" />
        <div className="tools"> TOOLS <i class="fa-solid fa-circle-info"></i></div>
        <input
        style={{color:'rgb(108, 107, 106)'}}
          type="text"
          name="tools"
          value={userData.tools}
          className="tools-input"
          readOnly
        />
        <hr className="hr" />
        <div className="link"> LINK <i class="fa-solid fa-circle-info"></i></div>
        <input
        style={{color:'rgb(108, 107, 106)'}}
          type="text"
          name="link"
          value={userData.link}
          className="link-input"
          readOnly
        />
        <hr className="hr" />
      </div>
    </div>
  );
}

export default CenterLeft;
