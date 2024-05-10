import React, { useState } from "react";

function CenterRight({ userData }) {
  const [title, setTitle] = useState("Add Experience");
  const [desc, setDesc] = useState("Tell something about your experience");

  const [infoTitle, setInfoTitle] = useState("Experience One");
  const [infoDesc, setInfoDesc] = useState("Experience Description One");

  const [activeTab, setActiveTab] = useState("experience");

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    // Update infoTitle and infoDesc based on the active tab
    switch (tab) {
      case "experience":
        setInfoTitle(userData.Experience[0].infoTitle);
        setInfoDesc(userData.Experience[0].infoDesc);
        break;
      case "education":
        setInfoTitle(userData.Education[0].infoTitle);
        setInfoDesc(userData.Education[0].infoDesc);
        break;
      case "certificates":
        setInfoTitle(userData.Certificates[0].infoTitle);
        setInfoDesc(userData.Certificates[0].infoDesc);
        break;
      default:
        break;
    }
  };

  return (
    <div className="centerright">
      <div className="cr-heading">Add a professional one-liner</div>
      <div className="head-container">
        <div
          className={`work ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => handleTabClick("experience")}
        >
          WORK EXPERIENCE
        </div>
        <div
          className={`education ${activeTab === "education" ? "active" : ""}`}
          onClick={() => handleTabClick("education")}
        >
          EDUCATION
        </div>
        <div
          className={`certificates ${
            activeTab === "certificates" ? "active" : ""
          }`}
          onClick={() => handleTabClick("certificates")}
        >
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
          <div className="info-btn">
            <button style={{ fontWeight: "bold" }}>Edit Content</button>{" "}
            <button style={{ border: "none" }}>Dismiss</button>
          </div>
        </div>
        <div className="info-two">
          <div className="title">{infoTitle}</div>
          <div className="desc">{infoDesc}</div>
          <div className="info-btn">
            <button style={{ fontWeight: "bold" }}>Edit Content</button>{" "}
            <button style={{ border: "none" }}>Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CenterRight;
