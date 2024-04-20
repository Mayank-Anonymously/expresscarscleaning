import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

const DetailTabs = () => {
  const [activeTab, setActiveTab] = useState("nav-home");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <nav>
              <div
                className="nav nav-tabs nav-fill"
                id="nav-tab"
                role="tablist"
              >
                <a
                  className={`nav-item nav-link ${
                    activeTab === "nav-home" ? "active" : ""
                  }`}
                  id="nav-home-tab"
                  onClick={() => handleTabClick("nav-home")}
                >
                  Home
                </a>
                <a
                  className={`nav-item nav-link ${
                    activeTab === "nav-profile" ? "active" : ""
                  }`}
                  id="nav-profile-tab"
                  onClick={() => handleTabClick("nav-profile")}
                >
                  Profile
                </a>
                <a
                  className={`nav-item nav-link ${
                    activeTab === "nav-contact" ? "active" : ""
                  }`}
                  id="nav-contact-tab"
                  onClick={() => handleTabClick("nav-contact")}
                >
                  Contact
                </a>
                <a
                  className={`nav-item nav-link ${
                    activeTab === "nav-about" ? "active" : ""
                  }`}
                  id="nav-about-tab"
                  onClick={() => handleTabClick("nav-about")}
                >
                  About
                </a>
              </div>
            </nav>
            <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
              <div
                className={`tab-pane fade ${
                  activeTab === "nav-home" ? "show active" : ""
                }`}
                id="nav-home"
                role="tabpanel"
              >
                asdasdasdasdas
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "nav-profile" ? "show active" : ""
                }`}
                id="nav-profile"
                role="tabpanel"
              >
                asdasdasdasdaasdasda
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "nav-contact" ? "show active" : ""
                }`}
                id="nav-contact"
                role="tabpanel"
              >
                {/* Content for Contact Tab */}
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "nav-about" ? "show active" : ""
                }`}
                id="nav-about"
                role="tabpanel"
              >
                {/* Content for About Tab */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailTabs;
