import React from "react";
import "./feedback.css";

export const DashboardFeedBack = ({img,disc,name,partner}) => {
  return (
    <div className="dashboard-feed-back">
      <img className="rectangle" alt="Rectangle" src={img} />
      <div className="feedback-name">
        <p className="vorem-ipsum-dolor">
          {disc}
        </p>
        <div className="name-title">
          <p className="jagrit-sachdeva">
            <span className="text-wrapper">
              {name}
              <br />
            </span>
            <span className="span">{partner}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
