import React from "react";
import { useInputContext } from "../../../../App";
import "./card-cvv.css"
import { CardCvvDigit } from "./digit/card-cvv-digit";
import { parseCardCvv } from "../../../../utils/parse-card-cvv";

export const CardCvv: React.FC = () => {
  const {cardCvv} = useInputContext();

  const parsedCardCvv = parseCardCvv(cardCvv);

  return (
    <div className="card-cvv">
      {[...parsedCardCvv].map((cvvDigit, index) =>
        <CardCvvDigit cvvDigitKey={cvvDigit + index} cvvDigit={cvvDigit}/>)
      }
    </div>
  );
}
