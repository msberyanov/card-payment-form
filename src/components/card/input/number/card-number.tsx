import React from "react";
import "./card-number.css"
import { parseCardNumber } from "../../../../utils/parse-card-number";
import { CardDigit } from "./digit/card-digit";
import { useInputContext } from "../../../../App";

export const CardNumber: React.FC = () => {
  const {cardNumber} = useInputContext();

  const numberParts = parseCardNumber(cardNumber);

  return (
    <div className="card-number card-text-element">
      {numberParts.map(numberPart =>
        <div className="card-number-part">
          {[...numberPart].map((parsedNumber, index) =>
            <CardDigit digitKey={parsedNumber + index} digit={parsedNumber}/>
          )}
        </div>
      )}
    </div>
  );
}
