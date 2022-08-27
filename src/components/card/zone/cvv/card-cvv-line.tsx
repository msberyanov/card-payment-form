import React from "react";
import "./card-cvv-line.css"
import { CardCvv } from "../../input/cvv/card-cvv";

export const CardCvvLine: React.FC = () => {
  return (
    <div className="card-cvv-line-zone">
      <div className="card-cvv-line">
        <CardCvv/>
      </div>
    </div>
  );
}
