import React from "react";
import "./card-expiration-date.css"
import { useInputContext } from "../../../../card-app";
import { CardDateComponent } from "./date-component/card-date-component";

const CARD_DATE_DIVIDER = "/";

export const CardExpirationDate: React.FC = () => {
  const {
    cardExpirationDateMonth,
    cardExpirationDateYear
  } = useInputContext();

  return (
    <div className="card-expiration-date card-text-element">
      {[...cardExpirationDateMonth].map((cardExpirationDate, index) =>
        <CardDateComponent dateComponentKey={cardExpirationDate + index} dateComponent={cardExpirationDate}/>)
      }

      <CardDateComponent dateComponentKey={CARD_DATE_DIVIDER} dateComponent={CARD_DATE_DIVIDER}/>

      {[...cardExpirationDateYear].map((cardExpirationDate, index) =>
        <CardDateComponent dateComponentKey={cardExpirationDate + index} dateComponent={cardExpirationDate}/>)
      }
    </div>
  );
}
