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
        infoTitle: 'Experience one',
        infoDate: 'May 2024 - May 2024',
        infoDesc: 'Experience Description One'
      },
      {
        infoTitle: 'Experience Two',
        infoDate: 'May 2024 - May 2024',
        infoDesc: 'Experience Description Two'
      },
      {
        infoTitle: 'Experience Three',
        infoDate: 'May 2024 - May 2024',
        infoDesc: 'Experience Description Three'
      },
    ],
    Certificates: [
      {
 
        infoTitle: 'Certificate one',
        infoDate: 'May 2024 - May 2024',
        infoDesc: 'Certificate Description One'
      },
      {
 
        infoTitle: 'Certificate Two',
        infoDate: 'May 2024 - May 2024',
        infoDesc: 'Certificate Description Two'
      },
    ],
    Education: [
      {
        infoTitle: 'Education one',
        infoDate: 'May 2024 - May 2024',
        infoDesc: 'Education Description One'
      },
    ],

  });

  return (
    <div className="rightside">
      <div className="header">
        <button className="icon-button-top" style={{marginRight:'10px'}}>
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
