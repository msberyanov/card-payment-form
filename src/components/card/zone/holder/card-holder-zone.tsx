import React from "react";
import { CardHolderTitle } from "./title/card-holder-title";
import { CardHolder } from "../../input/holder/card-holder";
import "./card-holder-zone.css"

export const CardHolderZone: React.FC = () => {
  return (
    <div className="card-holder-zone">
      <CardHolderTitle/>
      <CardHolder/>
    </div>
  );
}
