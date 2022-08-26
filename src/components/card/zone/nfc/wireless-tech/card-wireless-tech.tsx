import React from "react";
import cardWirelessTech from "./card-wireless-tech.png"
import "./card-wireless-tech.css"

export const CardWirelessTech: React.FC = () => {
  return (
    <img
      src={cardWirelessTech}
      alt="card-wireless-tech"
      className="card-wireless-tech card-image-element"
    />
  );
}
