import React from "react";
import "./card-expiration-date-zone.css"
import { CardExpirationTitle } from "./title/card-expiration-title";
import { CardExpirationDate } from "../../input/expiration-date/card-expiration-date";

export const CardExpirationDateZone: React.FC = () => {
  return (
    <div className="card-expiration-date-zone">
      <CardExpirationTitle/>
      <CardExpirationDate/>
    </div>
  );
}
