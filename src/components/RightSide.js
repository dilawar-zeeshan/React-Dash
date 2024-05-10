// RightSide.js
import React, { useState } from "react";
import ppImage from "./images/pp.png";
import CenterLeft from "./CenterLeft";
import CenterRight from "./CenterRight";
import FloatingBtns from "./FloatingBtns";

function RightSide() {
  const [userData, setUserData] = useState({
    name: "Zeeshan Dilawar",
    email: "zeeshan1234@gmail.com",
    about: "front end intern",
    location: "Karachi, Pakistan",
    skills: "very skilled",
    tools: "vs code",
    link: "github.com/dilawar-zeeshan",
    Experience: [
      {
        title: "Add Experience ",
        desc: "description of Experience ",
        infoTitle: 'Experience one',
        infoDesc: 'Experience Description One'
      },
    ],
    Certificates: [
      {
        title: "Add Certificates ",
        desc: "description of Certificates ",
        infoTitle: 'Certificate one',
        infoDesc: 'Certificate Description One'
      },
    ],
    Education: [
      {
        title: "Add Education ",
        desc: "description of Education",
        infoTitle: 'Education one',
        infoDesc: 'Education Description One'
      },
    ],

  });

  return (
    <div className="rightside">
      <div className="header">
        <button className="icon-button-top">
          <img src={ppImage} alt="Icon" />
        </button>
      </div>
      <div className="top-bot">
        <CenterLeft userData={userData} />
        <CenterRight userData={userData} />
        <FloatingBtns></FloatingBtns>
      </div>
    </div>
  );
}

export default RightSide;
