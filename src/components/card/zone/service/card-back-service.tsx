import React from "react";
import visaLogo from "./logo/visa-logo.png";
import "./card-service.css"

export const CardBackService: React.FC = () => {
  return (
    <div className="card-back-service">
      <img
        src={visaLogo}
        alt="visa-logo"
        className="visa-logo card-image-element"
      />
    </div>
  );
}
