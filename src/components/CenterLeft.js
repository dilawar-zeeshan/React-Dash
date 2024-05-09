import React, { useState } from "react";
import ppImage from "./images/pp.png";

function CenterLeft() {
  // Step 1: Declare state variables
  const [userData, setUserData] = useState({
    name: "Zeeshan Dilawar",
    email: "zeeshan1234@gmail.com",
    about: "front end intern",
    location: "Karachi, Pakistan",
    skills: "very skilled",
    tools: "vs code",
    link: "github.com/dilawar-zeeshan"
  });

  // Step 2: Create event handlers to update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="centerleft">
      <div className="cl-pp">
        <img src={ppImage} alt="Icon" />
      </div>
      <div className="name">
        <input 
          type="text" 
          name="name" 
          value={userData.name} 
          onChange={handleChange} 
          className="name-input"
        />
      </div>
      <div className="email">
        <input 
          type="text" 
          name="email" 
          value={userData.email} 
          onChange={handleChange} 
          className="email-input"
        />
      </div>
      <div className="left-bot">
        <hr className="hr" />
        <div className="about"> ABOUT ME </div>
        <input 
          type="text" 
          name="about" 
          value={userData.about} 
          onChange={handleChange} 
          className="about-input"
        />
        <hr className="hr" />
        <div className="location"> LOCATION </div>
        <input 
          type="text" 
          name="location" 
          value={userData.location} 
          onChange={handleChange} 
          className="location-input"
        />
        <hr className="hr" />
        <div className="skills"> SKILLS </div>
        <input 
          type="text" 
          name="skills" 
          value={userData.skills} 
          onChange={handleChange} 
          className="skills-input"
        />
        <hr className="hr" />
        <div className="tools"> TOOLS </div>
        <input 
          type="text" 
          name="tools" 
          value={userData.tools} 
          onChange={handleChange} 
          className="tools-input"
        />
        <hr className="hr" />
        <div className="link"> LINK </div>
        <input 
          type="text" 
          name="link" 
          value={userData.link} 
          onChange={handleChange} 
          className="link-input"
        />
        <hr className="hr" />
      </div>
    </div>
  );
}

export default CenterLeft;
