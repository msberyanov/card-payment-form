import React from "react";
import "./card-date-component.css"
import "./card-date-component-animation.css"

interface CardDateComponentProps {
  dateComponentKey: string;
  dateComponent: string;
}

export const CardDateComponent: React.FC<CardDateComponentProps> = ({
  dateComponentKey,
  dateComponent
}) => {
  return (
    <div
      className="card-date-component card-date-component-appearance"
      key={dateComponentKey}
    >
      {dateComponent}
    </div>
  );
}
