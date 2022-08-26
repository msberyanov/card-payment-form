import React from "react";
import simCardChip from "./card-chip.png"
import "./card-chip.css"

export const CardChip: React.FC = () => {
  return (
    <img
      src={simCardChip}
      alt="sim-card-chip"
      className="sim-card-chip"
    />
  );
}
