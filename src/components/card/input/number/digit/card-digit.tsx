import React from "react";
import "./card-digit.css"
import "./card-digit-animation.css"

interface CardDigitProps {
  digitKey: string;
  digit: string;
}

export const CardDigit: React.FC<CardDigitProps> = ({
  digitKey,
  digit
}) => {
  return (
    <div key={digitKey} className="card-digit card-digit-appearance">
      {digit}
    </div>
  )
}
