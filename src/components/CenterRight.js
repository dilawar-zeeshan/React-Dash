import React, { useState } from "react";

function CenterRight() {
  const [title, setTitle] = useState("Add Experience");
  const [desc, setDesc] = useState("Tell something about your experience");

  const [infoTitle, setInfoTitle] = useState("Experience Title");
  const [infoDesc, setInfoDesc] = useState(" Experience DescriptionExperience DescriptionExperience DescriptionExperience DescriptionExperience DescriptionExperience DescriptionExperience Description Experience Description DescriptionExperience DescriptionExperience");

  const [activeTab, setActiveTab] = useState("experience");

  const handleEducationClick = () => {
    setTitle("Add Education");
    setDesc("Tell something about your education");
    setInfoTitle("Education Title");
    setInfoDesc("Education Description");
    setActiveTab("education");
  };
  
  const handleCertificatesClick = () => {
    setTitle("Add Certificates");
    setDesc("Tell something about your certificates");
    setInfoTitle("Certificates Title");
    setInfoDesc("Certificates Description");
    setActiveTab("certificates");
  };
  
  const handleExperienceClick = () => {
    setTitle("Add Experience");
    setDesc("Tell something about your experience");
    setInfoTitle("Experience Title");
    setInfoDesc("Experience Description");
    setActiveTab("experience");
  };
  

  return (
    <div className="centerright">
      <div className="cr-heading">Add a professional one-liner</div>
      <div className="head-container">
        <div className={`work ${activeTab === 'experience' ? 'active' : ''}`} onClick={handleExperienceClick}>
          WORK EXPERIENCE
        </div>
        <div className={`education ${activeTab === 'education' ? 'active' : ''}`} onClick={handleEducationClick}>
          EDUCATION
        </div>
        <div className={`certificates ${activeTab === 'certificates' ? 'active' : ''}`} onClick={handleCertificatesClick}>
          CERTIFICATES
        </div>
      </div>

      <div className="add-tab">
        <button>+</button>
        <div>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </div>
      </div>

      <div className="info-tab">
        <div className="info-one">
          <div className="title">{infoTitle}</div>
          <div className="desc">{infoDesc}</div>
        </div>
        <div className="info-two">
          <div className="title">{infoTitle}</div>
          <div className="desc">{infoDesc}</div>
        </div>
      </div>
    </div>
  );
}

export default CenterRight;
