import React, { useState } from "react";

function CenterRight({ userData }) {
  const [activeTab, setActiveTab] = useState("Experience");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="centerright">
      <div className="cr-heading">Add a professional one-liner</div>
      <div className="head-container">
        <div
          className={`work ${activeTab === "Experience" ? "active" : ""}`}
          onClick={() => handleTabClick("Experience")}
        >
          WORK EXPERIENCE
        </div>
        <div
          className={`education ${activeTab === "Education" ? "active" : ""}`}
          onClick={() => handleTabClick("Education")}
        >
          EDUCATION
        </div>
        <div
          className={`certificates ${
            activeTab === "Certificates" ? "active" : ""
          }`}
          onClick={() => handleTabClick("Certificates")}
        >
          CERTIFICATES
        </div>
      </div>

      <div className="add-tab">
        <button>+</button>
        <div>
          <div className="title">
            {activeTab === "Experience" && "Add Experience"}
            {activeTab === "Education" && "Add Education"}
            {activeTab === "Certificates" && "Add Certificates"}
          </div>
          <div className="desc">
            {activeTab === "Experience" &&
              "Tell something about your Experience"}
            {activeTab === "Education" && "Tell something about your Education"}
            {activeTab === "Certificates" &&
              "Tell something about your certificates"}
          </div>
        </div>
      </div>

      <div className="info-tab">
        {userData[activeTab].map(
          (item, index) => (
            <div className="info-one" key={index}>
              <div className="title">{item.infoTitle}</div>
              <div className="date">{item.infoDate}</div>
              <div className="desc">{item.infoDesc}</div>
              <div className="info-btn">
                <button style={{ fontWeight: "bold" }}>Edit Content</button>{" "}
                <button style={{ border: "none", background:'transparent' }}>Dismiss</button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default CenterRight;
